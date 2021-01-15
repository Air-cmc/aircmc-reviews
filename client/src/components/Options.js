import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Options = (props) => {
  console.log(props);
  const option = props.options.options;

  return (
    <div>
      <button id="button">Central Location ({option.centralLocation})</button>
      <button id="button">Comfortable Beds ({option.comfortableBeds})</button>
      <button id="button">Easy Check-In ({option.easyCheckIn})</button>
      <button id="button">Great Location ({option.greatLocation})</button>
      <button id="button">Great Restaurants ({option.greatRestaurants})</button>
      <button id="button">Great Views ({option.greatViews})</button>
      <button id="button">Responsive Host ({option.responsiveHost})</button>
    </div>
  );
};

export default Options;