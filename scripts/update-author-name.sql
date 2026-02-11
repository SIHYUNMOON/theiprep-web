-- Update existing posts to change author name from 'interprep official' to 'theiprep official'
UPDATE posts 
SET author = 'theiprep official' 
WHERE author = 'interprep official';
