DROP DATABASE IF EXISTS sdcreviews;

CREATE DATABASE sdcreviews;

\c sdcreviews;

CREATE TABLE "ratings" (
  "id" SERIAL PRIMARY KEY,
  "listing_id" int,
  "1_stars" int DEFAULT 0,
  "2_stars" int DEFAULT 0,
  "3_stars" int DEFAULT 0,
  "4_stars" int DEFAULT 0,
  "5_stars" int DEFAULT 0,
  "cleanliness" int DEFAULT 0,
  "communication" int DEFAULT 0,
  "checkin" int DEFAULT 0,
  "accuracy" int DEFAULT 0,
  "location" int DEFAULT 0,
  "value" int DEFAULT 0,
  "comfortable_beds" int DEFAULT 0,
  "responsive_host" int DEFAULT 0,
  "great_location" int DEFAULT 0,
  "great_views" int DEFAULT 0,
  "easy_checkin" int DEFAULT 0,
  "great_restaurants" int DEFAULT 0,
  "central_location" int DEFAULT 0
);

CREATE TABLE "reviews" (
  "id" SERIAL PRIMARY KEY,
  "listing_id" int,
  "name" varchar(100) NOT NULL,
  "body" varchar(500) NOT NULL,
  "created_at" timestamp with time zone DEFAULT now()
);

CREATE INDEX listing_index_ratings on ratings(listing_id);
CREATE INDEX listing_index_reviews on reviews(listing_id);

-- COPY ratings FROM 'ratings.csv' delimiter '|';
-- COPY reviews FROM 'reviews.csv' delimiter '|';
