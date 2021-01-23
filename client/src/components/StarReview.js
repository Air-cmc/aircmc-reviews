import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import StarRating from 'react-bootstrap-star-rating';


const StarReview = ({ ratings }) => {
  let categories = [];
  let catRates = [];
  if (ratings) {
    categories = Object.keys(ratings.starOptions);
    catRates = Object.values(ratings.starOptions);
  }
  return (
    <div>
      <div id='reviews-grid'>
        <div>
          {categories.slice(0, 3).map((cat, i) => (
            <div>
              <div className='cat-name' key={cat}>{cat}</div>
              <div id='cat-progress-bar'>
                <ProgressBar now={catRates[i] * 20} />
                <div id='progress-count' >{catRates[i]}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {categories.slice(3).map((cat, i) => (
            <div>
              <div className='cat-name' key={cat}>{cat}</div>
              <div id='cat-progress-bar'>
                <ProgressBar variant='custom' now={catRates[i] * 20} />
                <div id='progress-count' >{catRates[i]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarReview;