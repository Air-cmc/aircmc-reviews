import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StarRating from 'react-bootstrap-star-rating';
import { Card } from 'react-bootstrap';


const StarReview = (props) => {

  const stars = props.stars.starReview;
  console.log('star', props);

  return (
    <div>
      <span role="img" aria-label="sheep">⭐</span>
      <Col>{'One: '}{stars.one}</Col>
      <Col>{'Two: '}{stars.two}</Col>
      <Col>{'Three: '}{stars.three}</Col>
      <Col>{'Four: '}{stars.four}</Col>
      <Col>{'Five: '}{stars.five}</Col>

      <Card>

      </Card>
    </div>

  );
};

export default StarReview;