CREATE TABLE all_users (
    user_id SERIAL PRIMARY KEY,
    user_login VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_mail VARCHAR(255) NOT NULL,
)