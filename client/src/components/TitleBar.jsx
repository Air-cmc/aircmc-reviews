import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const Title = ({ ratings }) => {
  let total, average;
  if (ratings) {
    const stars = Object.values(ratings.starReview);
    total = stars.reduce((m, i) => m += i, 0);
    average = Math.round(stars
      .map((n, i) => n * (i + 1))
      .reduce((m, i) => m += i, 0) / total * 100) / 100;

  }
  return (
    <div>
      <br />
      <StarIcon style={{color: 'red', fontSize: '22px'}} />
      <div id='reviews-title'>
        <div>{`${average} (${total} reviews)`}</div>
      </div>
    </div>
  );
};

export default Title;