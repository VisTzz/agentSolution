CREATE TABLE IF NOT EXISTS public.contragents
(
    id integer PRIMARY KEY,
    body character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);

CREATE TABLE IF NOT EXISTS public.parties
(
    id integer PRIMARY KEY,
    body character varying(255) COLLATE pg_catalog."default",
    type character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL,
    email character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    role character varying(255) COLLATE pg_catalog."default" DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "partyId" integer,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email)
)