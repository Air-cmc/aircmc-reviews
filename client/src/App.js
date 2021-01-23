import React from 'react';
import Options from './components/Options';
import Review from './components/Review';
import StarReview from './components/StarReview';
import sample from './sample';
import Star from './components/Star';
import Title from './components/TitleBar.jsx';

const axios = require('axios');

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      sample: sample,
      reviews: [],
      ratings: []
    };
  }

  componentDidMount() {
    this.getReviews();
    this.getRatings();
  }

  getReviews() {
    axios.get('/review')
      .then((res) => {
        this.setState({reviews: res.data});
      })
      .catch(err => console.log(err));
  }

  getRatings() {
    axios.get('/rating')
      .then((res) => {
        this.setState({ratings: res.data});
      })
      .catch(err => console.log(err));
  }


  render () {
    const { reviews, ratings } = this.state;
    console.log('REVIEW:', reviews);
    console.log('Ratings: ', ratings);
    return (
      <div>
        <br />
        <hr />
        <Title ratings={ratings[0]} />
        <br />
        <StarReview ratings={ratings[0]}/>
        <br />
        <Options options={ratings[0]}/>
        <br /><br />
        <Review reviews={reviews} />
      </div>
    );
  }
}

export default App;