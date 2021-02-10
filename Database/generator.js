const faker = require('faker');

const rating = (id, listingId, reviewCount = 1) => {
  let stars = [];

  // assign a total number of star ratings that matches reviewCount
  for (let i = 0; i < 4; i++) {
    let rand = faker.random.number(reviewCount);
    stars[i] = rand;
    reviewCount -= rand;
  }
  stars[4] = reviewCount;

  // shuffle so not to bias towards lower star ratings
  stars = stars.sort(() => Math.random() - 0.5);

  const randomStarRating = () => faker.random.number(5);
  const randomFromReviewCount = () => faker.random.number(reviewCount);

  return {
    'id': id,
    'listing_id': listingId,
    '1_stars': stars[0],
    '2_stars': stars[1],
    '3_stars': stars[2],
    '4_stars': stars[3],
    '5_stars': stars[4],
    'cleanliness': randomStarRating(),
    'communication': randomStarRating(),
    'checkin': randomStarRating(),
    'accuracy': randomStarRating(),
    'location': randomStarRating(),
    'value': randomStarRating(),
    'comfortable_beds': randomFromReviewCount(),
    'responsive_host': randomFromReviewCount(),
    'great_location': randomFromReviewCount(),
    'great_views': randomFromReviewCount(),
    'easy_checkin': randomFromReviewCount(),
    'great_restaurants': randomFromReviewCount(),
    'central_location': randomFromReviewCount()
  };
};

const review = (id, listingId) => {
  return {
    'id': id,
    'listing_id': listingId,
    'name': faker.name.findName(),
    'body': faker.lorem.paragraph(faker.random.number({min: 1, max: 3})),
    'created_at': faker.date.past(5).toISOString(),
  };
};

module.exports = { rating, review };
