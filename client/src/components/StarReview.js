import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StarRating from 'react-bootstrap-star-rating';


const StarReview = (props) => {

  const stars = props.stars.starReview;

  return (
    <div>
      <span role="img" aria-label="sheep">⭐</span>
      <Col>{'One: '}{stars.one}</Col>
      <Col>{'Two: '}{stars.two}</Col>
      <Col>{'Three: '}{stars.three}</Col>
      <Col>{'Four: '}{stars.four}</Col>
      <Col>{'Five: '}{stars.five}</Col>
    </div>
  );
};

export default StarReview;