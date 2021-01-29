import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewModal from './ReviewModal.jsx';
import { Card } from 'react-bootstrap';
import Moment from 'moment';


const Review = ({ reviews }) => {
  const [modal, setModal] = useState(false);

  const [ratings, setRatings] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://54.67.25.138:3003/rating/${id}`)
      .then(({ data }) => {
        setRatings(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return reviews !== [] ? (
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
            </div>
          ))}
        </div>
      </div>
      <button id='show-revs-btn' onClick={() => setModal(true)}>{`Show all ${reviews.length} reviews`}</button>
      <br />
      <br />
      <ReviewModal ratings={ratings} show={modal} setModal={setModal} />
    </div>
  ) : <div>Loading...</div>;
};

export default Review;