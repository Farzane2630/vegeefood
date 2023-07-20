import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating(props) {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {
         props.type === "legend" ?(
            <>
            <Typography component="legend">Controlled</Typography>
            <Rating
              name="simple-controlled"
              value={props.rate}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
           </> 
         ):(
            <Rating name="read-only" value={props.rate} readOnly />
         )
      }
    </Box>
  );
}