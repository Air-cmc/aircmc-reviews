import React, { useState } from 'react';
import { Modal, InputGroup, FormControl, ProgressBar } from 'react-bootstrap';
import Moment from 'moment';
import TitleBar from './TitleBar.jsx';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';


const ReviewModal = ({ ratings, reviews, show, setModal }) => {
  const [query, setQuery] = useState('');

  let categories = [];
  let catRates = [];
  if (ratings.starOptions) {
    categories = Object.keys(ratings.starOptions);
    catRates = Object.values(ratings.starOptions);
  }
  const regEx = new RegExp(query, 'ig');
  reviews = reviews.filter(({ review }) => review ? regEx.test(review.body) : true);
  console.log(reviews);
  return (
    <div>
      <Modal
        show={show}
        onHide={() => setModal(false)}
        centered
        animation
        dialogClassName='rvw-modal'
      >
        <div id='rvw-mdl-close'>
          <button type='button' onClick={() => setModal(false)}>
            <CloseIcon fontSize='small' />
          </button>
        </div>
        <Modal.Body>
          <div id='rvw-mdl-grid'>
            <div>
              <TitleBar ratings={ratings} />
              <div id='rvw-mdl-bars'>
                <div id='rvw-mdl-cat'>
                  {categories.map(cat => <div>{cat}</div>)}
                </div>
                <div id='rvw-mdl-progress'>
                  {catRates.map(rate => (
                    <div>
                      <ProgressBar now={rate * 20}/>
                      <div id='rvw-mdl-bar-rtg'>{rate}</div>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              {/* Buttons */}
            </div>
            <div>
              <InputGroup id='rvw-modal-srch'>
                <InputGroup.Prepend>
                  <InputGroup.Text id="srch-icon"><SearchIcon /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder='Search'
                  id='rvw-srch-box'
                  onChange={(e) => setQuery(e.target.value)}
                />
              </InputGroup>
              <div id='rvw-mdl-reviews'>
                {reviews.map(({ review }) => (
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
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ReviewModal;
