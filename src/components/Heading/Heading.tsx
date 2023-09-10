"use client";
import { Typography } from "@material-tailwind/react";
interface Props {}

const Heading = (props: Props) => {
  return (
    <div className='mb-5'>
      <Typography variant='h1'>Air Quality Index</Typography>
      <Typography variant='paragraph'>
        Please select a city to continue.
      </Typography>
    </div>
  );
};

export default Heading;
