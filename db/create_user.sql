INSERT INTO users (email, user_password, profile_picture)
VALUES ($1, $2, $3) RETURNING * 
