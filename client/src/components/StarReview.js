import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProgressBar } from 'react-bootstrap';
import StarRating from 'react-bootstrap-star-rating';


const StarReview = () => {
  const [ratings, setRatings] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://54.67.25.138:3003/rating/${id}`)
      .then(({ data }) => {
        setRatings(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  let categories = [];
  let catRates = [];
  if (ratings.starOptions) {
    categories = Object.keys(ratings.starOptions);
    catRates = Object.values(ratings.starOptions);
  }
  console.log(catRates);
  console.log(ratings);
  return (
    <div>
      <div id='reviews-grid'>
        <div>
          {categories.slice(0, 3).map((cat, i) => (
            <div>
              <div className='cat-name' key={cat}>{cat}</div>
              <div id='cat-progress-bar'>
                <ProgressBar variant='custom' now={catRates[i] * 20} />
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
                <ProgressBar variant='custom' now={catRates[i + 3] * 20} />
                <div id='progress-count' >{catRates[i + 3]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarReview;