const db = require('./index.js');
const Review = require('./Review.js').Review;
const Rating = require('./Review.js').Rating;

const sampleRating = [
  {
    hostName: 'Elon Musk',
    starReview: {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5
    },
    starOptions: {
      Cleanliness: 4,
      Communication: 3,
      CheckIn: 2,
      Accuracy: 5,
      Location: 5,
      Value: 5
    },
    options: {
      comfortableBeds: 3,
      responsiveHost: 4,
      greatLocation: 10,
      greatViews: 7,
      easyCheckIn: 1,
      greatRestaurants: 3,
      centralLocation: 5
    }
  },
  {
    hostName: 'Dwayne Johnson',
    starReview: {
      1: 2,
      2: 3,
      3: 4,
      4: 5,
      5: 6
    },
    starOptions: {
      Cleanliness: 4,
      Communication: 3,
      CheckIn: 2,
      Accuracy: 5,
      Location: 5,
      Value: 5
    },
    options: {
      comfortableBeds: 4,
      responsiveHost: 5,
      greatLocation: 6,
      greatViews: 7,
      easyCheckIn: 4,
      greatRestaurants: 6,
      centralLocation: 7
    }
  },
  {
    hostName: 'Steve Schneider',
    starReview: {
      1: 5,
      2: 2,
      3: 3,
      4: 2,
      5: 0
    },
    starOptions: {
      Cleanliness: 4,
      Communication: 3,
      CheckIn: 2,
      Accuracy: 5,
      Location: 5,
      Value: 5
    },
    options: {
      comfortableBeds: 0,
      responsiveHost: 0,
      greatLocation: 4,
      greatViews: 2,
      easyCheckIn: 0,
      greatRestaurants: 3,
      centralLocation: 1
    }
  },
  {
    hostName: 'Milly Ketchum',
    starReview: {
      1: 1,
      2: 1,
      3: 2,
      4: 2,
      5: 5
    },
    starOptions: {
      Cleanliness: 4,
      Communication: 3,
      CheckIn: 2,
      Accuracy: 5,
      Location: 5,
      Value: 5
    },
    options: {
      comfortableBeds: 2,
      responsiveHost: 6,
      greatLocation: 3,
      greatViews: 4,
      easyCheckIn: 3,
      greatRestaurants: 5,
      centralLocation: 1
    }
  },
  {
    hostName: 'Jon Lasley',
    starReview: {
      1: 0,
      2: 1,
      3: 3,
      4: 5,
      5: 15
    },
    starOptions: {
      Cleanliness: 4,
      Communication: 3,
      CheckIn: 2,
      Accuracy: 5,
      Location: 5,
      Value: 5
    },
    options: {
      comfortableBeds: 8,
      responsiveHost: 20,
      greatLocation: 10,
      greatViews: 15,
      easyCheckIn: 25,
      greatRestaurants: 16,
      centralLocation: 9
    }
  },
  {
    hostName: 'Amanda DeVille',
    starReview: {
      1: 3,
      2: 4,
      3: 6,
      4: 8,
      5: 15
    },
    starOptions: {
      Cleanliness: 4,
      Communication: 3,
      CheckIn: 2,
      Accuracy: 5,
      Location: 5,
      Value: 5
    },
    options: {
      comfortableBeds: 3,
      responsiveHost: 6,
      greatLocation: 3,
      greatViews: 0,
      easyCheckIn: 4,
      greatRestaurants: 9,
      centralLocation: 1
    }
  },
  {
    hostName: 'Joe Docker',
    starReview: {
      1: 1,
      2: 2,
      3: 5,
      4: 3,
      5: 10
    },
    starOptions: {
      Cleanliness: 4,
      Communication: 3,
      CheckIn: 2,
      Accuracy: 5,
      Location: 5,
      Value: 5
    },
    options: {
      comfortableBeds: 4,
      responsiveHost: 2,
      greatLocation: 0,
      greatViews: 8,
      easyCheckIn: 1,
      greatRestaurants: 2,
      centralLocation: 4
    }
  },
];

const sampleReview = [
  {
    host: 'Musk',
    review: {
      name: 'Jaques Pierre',
      body: 'Decent house, host seemed a bit spaced out.'
    }
  },
  {
    host: 'Musk',
    review: {
      name: 'Sassy Pants',
      body: 'If he spent half the time he spends at work making the house comfortable it would have been a great weekend.'
    }
  },
  {
    host: 'Musk',
    review: {
      name: 'Mark Smith',
      body: 'Loved the place, for sure would come back!'
    }
  },
  {
    host: 'Dwayne Johnson',
    review: {
      name: 'Dan Paper',
      body: 'Dwayne let me stay an extra night half price because my flight was cancelled. Thank you! What a win for me.'
    }
  },
  {
    host: 'Dwayne Johnson',
    review: {
      name: 'Sylvester Scissor',
      body: 'Man this house really rocked! Lost for words.'
    }
  },
  {
    host: 'Steve Schneider',
    review: {
      name: 'Gene',
      body: 'Not the best.'
    }
  },
  {
    host: 'Steve Schneider',
    review: {
      name: 'Morgan Meanie',
      body: 'Terrible! I will be writing Destination: Capstone directly to complain.'
    }
  },
  {
    host: 'Milly Ketchum',
    review: {
      name: 'Dennis',
      body: 'What a place!'
    }
  },
  {
    host: 'Milly Ketchum',
    review: {
      name: 'Alice Wonder',
      body: 'Well I\'ve often seen a cat without a grin, but a grin without a cat! It\'s the most curios thing!'
    }
  },
  {
    host: 'Jon Lasley',
    review: {
      name: 'Patrick ',
      body: 'What a lovely host and amazing home! His response time was very fast, what a quick typer!'
    }
  },
];


const insertSampleBlogs = function() {
  Rating.create(sampleRating)
    .then(() => Review.create(sampleReview))
    .then(() => db.close());
};

insertSampleBlogs();