import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Options = ({ options }) => {

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