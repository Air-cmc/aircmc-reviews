import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';

const host = SERVICE_HOST;
const port = SERVICE_PORT;

const Title = ({ratings}) => {
  let total, average;
  if (ratings.starReview) {
    const stars = Object.values(ratings.starReview);
    total = stars.reduce((m, i) => m += i, 0);
    average = Math.round(stars
      .map((n, i) => n * (i + 1))
      .reduce((m, i) => m += i, 0) / total * 100) / 100;
  }

  return (
    <div>
      <br />
      <StarIcon id='rvws-star'/>
      <div id='reviews-title'>
        <div>{`${average} (${total} reviews)`}</div>
      </div>
    </div>
  );
};

export default Title;
