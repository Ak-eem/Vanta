-- Run once in the Supabase SQL editor. Rows hold only ciphertext; id/kind/timestamps are visible, content is not.
create table if not exists vanta_sync (
  id text primary key,
  user_id uuid not null default auth.uid(),
  kind text not null,
  updated_at bigint not null,
  device_id text not null,
  deleted boolean not null default false,
  blob text not null
);
create index if not exists vanta_sync_updated on vanta_sync (user_id, updated_at);
alter table vanta_sync enable row level security;
create policy "own rows" on vanta_sync for all using (user_id = auth.uid()) with check (user_id = auth.uid());
