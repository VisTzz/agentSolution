create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
)

create TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES person (id)
)

INSERT INTO public.users(
	id, email, password, role, "createdAt", "updatedAt")
	VALUES (0, 'admin', 'admin', 'admin', NOW(), NOW());