import React from 'react';
import Options from './components/Options';
import Review from './components/Review';
import StarReview from './components/StarReview';
import sample from './sample';
import SimpleRating from './components/Star';

const axios = require('axios');

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      sample: sample,
      reviews: {},
      ratings: {}
    };
    console.log('state', this.state);
  }

  componentDidMount() {
    this.getReviews();
    this.getRatings();
  }

  getReviews() {

    axios.get('/review')
      .then((res) => {
        this.setState({reviews: res.data});
        console.log(res);
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

    return (
      <div>
        <h1>React is running!</h1>
        <hr></hr>
        <SimpleRating />
        <StarReview stars={this.state.sample[0]}/>
        <hr></hr>
        <Options options={this.state.sample[0]}/>
        <hr></hr>
        Reviews for: {this.state.sample[0].hostName}
        <Review reviews={this.state.sample[1]} />
      </div>
    );
  }
}

export default App;