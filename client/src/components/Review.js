import React from 'react';
import { Card } from 'react-bootstrap';


const Review = (props) => {
  console.log('reveiw', props);

  return (
    <div className="card-container">
      {props.reviews.map((review, index) => {
        return (
          <Card className="card" key={index}>
            <Card.Header>{review.review.name}</Card.Header>
            <Card.Body>
              <Card.Text>{review.review.body}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Review;