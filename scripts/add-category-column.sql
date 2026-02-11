-- Add category column to posts table
ALTER TABLE posts ADD COLUMN IF NOT EXISTS category TEXT DEFAULT '인터프렙 소개';

-- Create index for category filtering
CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category);
