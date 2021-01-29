import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';


const Options = () => {
  const [options, setOptions] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://54.67.25.138:3003/rating/${id}`)
      .then(({ data }) => {
        setOptions(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const option = options ? options.options : null;
  return option ? (
    <div>
      <button id="opt-btn">Central Location <div id='button-num'>{option.centralLocation}</div></button>
      <button id="opt-btn">Comfortable Beds <div id='button-num'>{option.comfortableBeds}</div></button>
      <button id="opt-btn">Easy Check-In <div id='button-num'>{option.easyCheckIn}</div></button>
      <button id="opt-btn">Great Location <div id='button-num'>{option.greatLocation}</div></button>
      <button id="opt-btn">Great Restaurants <div id='button-num'>{option.greatRestaurants}</div></button>
      <button id="opt-btn">Great Views <div id='button-num'>{option.greatViews}</div></button>
      <button id="opt-btn">Responsive Host <div id='button-num'>{option.responsiveHost}</div></button>
    </div>
  ) : <div>Loading...</div>;
};

export default Options;