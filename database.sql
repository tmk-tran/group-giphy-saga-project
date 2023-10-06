CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);


CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (300) NOT NULL,
    "category_id" INT
);


-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');


INSERT INTO "favorites" ("url", "category_id")
VALUES ('https://giphy.com/gifs/this-is-fine-QMHoU66sBXqqLqYvGO', '1'), ('https://giphy.com/gifs/parksandrec-parks-and-recreation-rec-peacocktv-iF8IaDx2N6vfzS2k52', '2');


SELECT "favorites"."id", "favorites"."url", "favorites"."category_id", "category"."name" FROM "favorites"
    JOIN "category" ON "category"."id" = "favorites"."category_id" ORDER BY "favorites"."id" ASC;