-- Create expedition_applications table
create table if not exists public.expedition_applications (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  phone text,
  telegram text,
  email text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Ensure at least one contact method (phone or telegram) is provided
  constraint at_least_one_contact check (
    phone is not null or telegram is not null
  ),
  
  -- Email validation
  constraint valid_email check (
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  )
);

-- Create an index on created_at for efficient sorting
create index if not exists expedition_applications_created_at_idx 
  on public.expedition_applications (created_at desc);

-- Create an index on email for lookups
create index if not exists expedition_applications_email_idx 
  on public.expedition_applications (email);

-- Enable Row Level Security (RLS)
alter table public.expedition_applications enable row level security;

-- RLS Policy: Allow public to insert applications (for the form submission)
create policy "Allow public to insert applications"
  on public.expedition_applications
  for insert
  to anon
  with check (true);

-- RLS Policy: Allow authenticated users to view all applications
create policy "Allow authenticated users to view applications"
  on public.expedition_applications
  for select
  to authenticated
  using (true);

-- RLS Policy: Allow authenticated users to update applications
create policy "Allow authenticated users to update applications"
  on public.expedition_applications
  for update
  to authenticated
  using (true)
  with check (true);

-- RLS Policy: Allow authenticated users to delete applications
create policy "Allow authenticated users to delete applications"
  on public.expedition_applications
  for delete
  to authenticated
  using (true);

-- Create function to automatically update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create trigger to call the function on update
create trigger set_updated_at
  before update on public.expedition_applications
  for each row
  execute function public.handle_updated_at();

-- Add comment to table
comment on table public.expedition_applications is 'Stores expedition application submissions from potential participants';
