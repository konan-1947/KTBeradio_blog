-- Run this in Supabase SQL Editor, then configure it at:
-- Authentication -> Hooks -> Before User Created -> Postgres Function

create or replace function public.allow_gmail_signup(event jsonb)
returns jsonb
language plpgsql
as $$
declare
  email text := lower(trim(event->'user'->>'email'));
begin
  if email is null or email !~ '^[^@[:space:]]+@gmail[.]com$' then
    return jsonb_build_object(
      'error', jsonb_build_object(
        'http_code', 400,
        'message', 'Chỉ chấp nhận email có đuôi @gmail.com.'
      )
    );
  end if;

  return '{}'::jsonb;
end;
$$;

grant usage on schema public to supabase_auth_admin;
grant execute on function public.allow_gmail_signup(jsonb) to supabase_auth_admin;
revoke execute on function public.allow_gmail_signup(jsonb) from anon, authenticated, public;
