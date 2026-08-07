# Web Security Reference — Defensive Only

## OWASP Top 10 Quick Reference

### 1. Injection (SQL, NoSQL, Command)
**Risk:** Attacker injects malicious code into queries
**Fix:**
```python
# WRONG - never do this
query = f"SELECT * FROM users WHERE email = '{email}'"

# RIGHT - parameterized queries always
cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
```
```javascript
// Wrong
db.query(`SELECT * FROM users WHERE id = ${userId}`)
// Right
db.query('SELECT * FROM users WHERE id = ?', [userId])
```

### 2. Broken Authentication
**Risk:** Weak passwords, exposed tokens, no rate limiting
**Fix:**
- Always hash passwords: bcrypt with cost factor 12+
- Never store plaintext passwords, ever
- Use JWT with short expiry (15min access, 7d refresh)
- Rate limit login endpoints: max 5 attempts per 15 minutes
- Implement account lockout after repeated failures

```python
import bcrypt
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt(rounds=12))
valid = bcrypt.checkpw(password.encode(), hashed)
```

### 3. Cross-Site Scripting (XSS)
**Risk:** Attacker injects scripts that run in victim's browser
**Fix:**
```javascript
// WRONG - never do this
element.innerHTML = userInput;
document.write(userInput);

// RIGHT - always escape or use textContent
element.textContent = userInput;
// OR sanitize with DOMPurify
element.innerHTML = DOMPurify.sanitize(userInput);
```

### 4. Insecure Direct Object References
**Risk:** User accesses other users' data by changing IDs
**Fix:** Always verify ownership before returning data
```python
# Always check: does this user own this resource?
resource = db.get(resource_id)
if resource.user_id != current_user.id:
    return 403
```

### 5. Security Misconfiguration
**Common mistakes to always check:**
- Debug mode left on in production
- Default credentials not changed
- Unnecessary ports/services exposed
- Verbose error messages revealing stack traces
- Missing security headers

## Security Headers (Always Include)
```python
# Flask example
@app.after_request
def security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains'
    response.headers['Content-Security-Policy'] = "default-src 'self'"
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
    return response
```

## Input Validation
```python
import re

def validate_email(email: str) -> bool:
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email)) and len(email) <= 254

def sanitize_string(s: str, max_length: int = 255) -> str:
    s = s.strip()
    s = s[:max_length]
    s = re.sub(r'[<>"\']', '', s)  # remove HTML special chars
    return s
```

## Environment Variables — Never Hardcode Secrets
```python
# WRONG
API_KEY = "sk-abc123realkey"
DB_PASSWORD = "mypassword123"

# RIGHT - always use environment variables
import os
from dotenv import load_dotenv
load_dotenv()
API_KEY = os.getenv("API_KEY")
DB_PASSWORD = os.getenv("DB_PASSWORD")
```
`.env` file must ALWAYS be in `.gitignore`. Never commit secrets.

## CORS Configuration
```python
# Flask
from flask_cors import CORS
# Wrong - allows everything
CORS(app)
# Right - whitelist specific origins
CORS(app, origins=["https://yourdomain.com", "https://app.yourdomain.com"])
```

## Rate Limiting
```python
from flask_limiter import Limiter
limiter = Limiter(app, key_func=get_remote_address)

@app.route('/login', methods=['POST'])
@limiter.limit("5 per 15 minutes")
def login():
    pass

@app.route('/api/data')
@limiter.limit("100 per minute")
def api_data():
    pass
```

## File Upload Security
```python
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'pdf'}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def secure_upload(file):
    if not allowed_file(file.filename):
        raise ValueError("File type not allowed")
    if len(file.read()) > MAX_FILE_SIZE:
        raise ValueError("File too large")
    file.seek(0)
    filename = secure_filename(file.filename)  # werkzeug
    return filename
```

## Dependency Scanning Checklist
Run before every deployment:
```bash
# Node.js
npm audit
npm audit fix

# Python
pip install safety
safety check

# Check for outdated packages
pip list --outdated
npm outdated
```

## Common Vulnerabilities Checklist
Before shipping any web app, check:
- [ ] All inputs validated and sanitized server-side
- [ ] No secrets in code or git history
- [ ] Passwords hashed with bcrypt/argon2, never MD5/SHA1
- [ ] HTTPS enforced everywhere
- [ ] Security headers present
- [ ] Rate limiting on auth endpoints
- [ ] CORS properly configured
- [ ] File uploads validated (type + size)
- [ ] SQL queries parameterized
- [ ] User owns resource before allowing access
- [ ] Error messages don't reveal stack traces in production
- [ ] Dependencies scanned for known vulnerabilities
- [ ] Debug mode off in production
