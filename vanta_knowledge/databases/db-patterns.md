# Database Patterns Reference

## Choosing the Right Database

| Use Case | Database | Why |
|---|---|---|
| Simple local app/script | SQLite | Zero setup, file-based, perfect for <100k rows |
| Web app, production | PostgreSQL | Rock solid, feature-rich, free, scales well |
| Realtime/live updates | Firebase Realtime DB | WebSocket sync built-in, great for chat/live features |
| Simple auth + storage | Firebase Firestore | NoSQL, flexible schema, good free tier |
| Caching/sessions | Redis | In-memory, blazing fast, not for primary storage |
| Full-text search | Elasticsearch or Postgres FTS | Depends on scale |

## PostgreSQL Patterns

### Connection (Python)
```python
import psycopg2
from contextlib import contextmanager

DATABASE_URL = os.getenv("DATABASE_URL")

@contextmanager
def get_db():
    conn = psycopg2.connect(DATABASE_URL)
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()
```

### Schema Design Principles
```sql
-- Always include these on every table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ  -- soft delete pattern
);

-- Index frequently queried columns
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);

-- Composite index for common query patterns
CREATE INDEX idx_posts_user_created ON posts(user_id, created_at DESC);
```

### Always Use Parameterized Queries
```python
# NEVER string concatenation
# RIGHT:
with get_db() as conn:
    cursor = conn.cursor()
    cursor.execute(
        "SELECT * FROM users WHERE email = %s AND active = %s",
        (email, True)
    )
    user = cursor.fetchone()
```

### Pagination Pattern
```sql
-- Cursor-based (better for large datasets)
SELECT * FROM posts 
WHERE created_at < $1 
ORDER BY created_at DESC 
LIMIT 20;

-- Offset-based (simpler, worse at scale)
SELECT * FROM posts 
ORDER BY created_at DESC 
LIMIT 20 OFFSET $1;
```

## SQLite Patterns (Local/Simple Apps)
```python
import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).parent / "data.db"

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row  # access columns by name
    conn.execute("PRAGMA foreign_keys = ON")  # enforce FK constraints
    conn.execute("PRAGMA journal_mode = WAL")  # better concurrent reads
    return conn

def init_db():
    with get_db() as conn:
        conn.executescript("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
        """)
```

## Firebase Patterns

### Firestore Structure
```javascript
// Good structure - flat, not deeply nested
// Collections at root level
/users/{userId}
/posts/{postId}
/comments/{commentId}

// Bad - deeply nested, hard to query
/users/{userId}/posts/{postId}/comments/{commentId}

// Reference other docs by ID, don't embed
{
  userId: "abc123",
  postId: "xyz456",
  content: "...",
  createdAt: serverTimestamp()
}
```

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    // Posts are public to read, only owner can write
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null && 
                      request.auth.uid == resource.data.userId;
    }
  }
}
```

## ORM Patterns (SQLAlchemy)
```python
from sqlalchemy import create_engine, Column, String, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime
import uuid

Base = declarative_base()
engine = create_engine(os.getenv("DATABASE_URL"))
Session = sessionmaker(bind=engine)

class User(Base):
    __tablename__ = 'users'
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    email = Column(String, unique=True, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    is_active = Column(Boolean, default=True)

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

# Usage
with Session() as session:
    user = session.query(User).filter_by(email=email).first()
    if not user:
        user = User(email=email)
        session.add(user)
        session.commit()
```

## Migration Pattern (Alembic)
```bash
pip install alembic
alembic init migrations
alembic revision --autogenerate -m "add users table"
alembic upgrade head
alembic downgrade -1  # rollback one version
```

## Database Performance Checklist
- [ ] Every foreign key has an index
- [ ] Frequently filtered columns are indexed
- [ ] No N+1 query problems (use JOINs or batch fetching)
- [ ] Use connection pooling in production
- [ ] Parameterized queries everywhere
- [ ] Soft deletes instead of hard deletes for important data
- [ ] Timestamps (created_at, updated_at) on every table
- [ ] UUIDs for public-facing IDs (not sequential integers)
- [ ] Database backups configured
- [ ] Never store passwords — only hashes
