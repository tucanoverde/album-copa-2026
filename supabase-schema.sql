-- =====================================================
-- Álbum Copa 2026 — Schema Supabase (v2 - família)
-- 4 usuários fixos com senha no app, RLS DESABILITADO
-- (uso familiar, ~4 usuários, anon key faz tudo)
-- Rode em: Supabase Dashboard → SQL Editor → Run
-- =====================================================

-- limpa versão antiga se existir
drop table if exists public.stickers cascade;
drop table if exists public.predictions cascade;
drop table if exists public.penalty_votes cascade;
drop table if exists public.profiles cascade;

-- ========================
-- Tabela: profiles
-- ========================
create table public.profiles (
  user_key text primary key, -- 'gafe', 'lucas', 'jp', 'rafa'
  display_name text not null,
  emoji text,
  color text,
  created_at timestamptz default now()
);

-- ========================
-- Tabela: stickers
-- owned = 0 (falta), 1 (tenho), 2+ (com repetidas)
-- ========================
create table public.stickers (
  user_key text not null references public.profiles(user_key) on delete cascade,
  sticker_code text not null,
  owned integer not null default 0 check (owned >= 0),
  updated_at timestamptz default now(),
  primary key (user_key, sticker_code)
);

create index stickers_user_idx on public.stickers(user_key);
create index stickers_code_idx on public.stickers(sticker_code);

-- ========================
-- Tabela: predictions (palpites do bolão)
-- ========================
create table public.predictions (
  user_key text not null references public.profiles(user_key) on delete cascade,
  match_id integer not null,
  home_score integer check (home_score >= 0),
  away_score integer check (away_score >= 0),
  updated_at timestamptz default now(),
  primary key (user_key, match_id)
);

create index predictions_user_idx on public.predictions(user_key);
create index predictions_match_idx on public.predictions(match_id);

-- ========================
-- Tabela: penalty_votes (votação nos castigos)
-- ========================
create table public.penalty_votes (
  voter_key text not null references public.profiles(user_key) on delete cascade,
  target_key text not null references public.profiles(user_key) on delete cascade, -- pra quem o castigo foi aplicado
  penalty_id text not null,
  phase text not null check (phase in ('fase_grupos', 'fase_final')),
  voted_at timestamptz default now(),
  primary key (voter_key, target_key, phase)
);

-- ========================
-- RLS desabilitado (uso familiar com 4 usuários)
-- ========================
alter table public.profiles      disable row level security;
alter table public.stickers      disable row level security;
alter table public.predictions   disable row level security;
alter table public.penalty_votes disable row level security;

-- ========================
-- Seed dos 4 perfis
-- ========================
insert into public.profiles (user_key, display_name, emoji, color) values
  ('gafe',  'Gabriela & Felipe', '👫', '#e91e63'),
  ('lucas', 'Lucas',             '⚽', '#2196f3'),
  ('jp',    'João Pedro',        '🦁', '#ff9800'),
  ('rafa',  'Rafa',              '🚀', '#9c27b0')
on conflict (user_key) do update set
  display_name = excluded.display_name,
  emoji = excluded.emoji,
  color = excluded.color;
