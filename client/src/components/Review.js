import React from 'react';
import { Card } from 'react-bootstrap';
import Moment from 'moment';


const Review = ({ reviews }) => {
  console.log(reviews);

  return reviews ? (
    <div>
      <div id='reviews-container'>
        <div>
          {reviews.slice(0, 2).map(({ review }) => (
            <div>
              <div className='reviewer-title-bar'>
                <img src='https://source.unsplash.com/random/100x100/?person' alt='' />
                <div id='reviewer-title-info'>
                  <div id='review-title-name' >{review.name.split(' ')[0]}</div>
                  <div id='review-title-joined' >{Moment(new Date(review.created_at)).format('MMMM YYYY')}</div>
                </div>
              </div>
              <div id='review-body' >{review.body}</div>
              <br />
              <br />
            </div>
          ))}
        </div>
        <div>
          {reviews.slice(2, 4).map(({ review }) => (
            <div>
              <div className='reviewer-title-bar'>
                <img src='https://source.unsplash.com/random/100x100/?person' alt='' />
                <div id='reviewer-title-info'>
                  <div id='review-title-name' >{review.name.split(' ')[0]}</div>
                  <div id='review-title-joined' >{Moment(new Date(review.created_at)).format('MMMM YYYY')}</div>
                </div>
              </div>
              <div id='review-body' >{review.body}</div>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
      <button id='show-revs-btn' onClick={() => { /* Create modal to open up here */ }}>{`Show all ${reviews.length} reviews`}</button>
      <br />
      <br />
    </div>
  ) : <div>Loading...</div>;
};

export default Review;