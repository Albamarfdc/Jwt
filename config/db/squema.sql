CREATE DATABASE collection


CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- Se debe activar la extensión para poder usar UUID en PostgreSQL

CREATE TABLE song (
    id SERIAL,
    name VARCHAR(50) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    gender VARCHAR(50) NOT NULL
);



CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY, 
    nombre VARCHAR(100) NOT NULL, 
    apellido VARCHAR(100) NOT NULL, 
    email VARCHAR(100) NOT NULL, 
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),-- default now() es para que se guarde la fecha actual 
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
