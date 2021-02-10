import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Options from './Options';
import Review from './Review';
import StarReview from './StarReview';
import Title from './TitleBar.jsx';

const host = SERVICE_HOST;
const port = SERVICE_PORT;

const Requester = () => {
  const [ratings, setRatings] = useState();
  const [reviews, setReviews] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://${host}:${port}/rating/${id}`)
      .then(({ data }) => {
        setRatings(data);
      })
      .catch(err => console.log(err));

    axios.get(`http://${host}:${port}/review/${id}`)
      .then(({ data }) => {
        setReviews(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (ratings === undefined || reviews === undefined) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <br />
      <hr />
      <Title ratings={ratings}/>
      <br />
      <StarReview ratings={ratings}/>
      <br />
      <Options ratings={ratings}/>
      <br /><br />
      <Review ratings={ratings} reviews={reviews}/>
    </div>
  );
};

export default Requester;
