CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- Favorite table
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (300) NOT NULL
);

CREATE TABLE "category_favorite" (
    "id" SERIAL PRIMARY KEY,
    "fav_id" REFERENCES "favorites",
    "category_id" REFERENCES "category"
);

-- foreignkey is the caregory id

INSERT INTO "favorites" ("url")
VALUES ('https://giphy.com/gifs/this-is-fine-QMHoU66sBXqqLqYvGO'), ('https://giphy.com/gifs/parksandrec-parks-and-recreation-rec-peacocktv-iF8IaDx2N6vfzS2k52');