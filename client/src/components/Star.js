import React from 'react';
import { Rating } from '@material-ui/lab/';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const SimpleRating = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div>

      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Your Rating</Typography>
        <Rating name='half-rating' value={value} precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }} />
      </Box>
    </div>
  );
};

export default SimpleRating;
