import React from './node_modules/react';
import Rating from './node_modules/@material-ui/lab/Rating';
import Box from './node_modules/@material-ui/core/Box';

export default function StarReview(props) {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <Box align="left"  component="fieldset" mb={3} borderColor="transparent">
        <Rating
          value={value}
          name="rating"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onClick={props.handleInputChange}
        />
      </Box>
    </div>
  )
}