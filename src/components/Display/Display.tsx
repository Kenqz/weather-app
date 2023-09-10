import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";

const Display = ({ data }: any) => {
  // todo type out data
  return (
    <Card className='mt-6 w-96'>
      <CardBody>
        <img
          className='h-16 w-16 rounded-full object-cover object-center'
          src='https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
          alt='nature image'
        />
        {/* <Typography variant='h5' color='blue-gray' className='mb-2'>
          {data.data.city.name}
        </Typography> */}
        {/* <Typography variant='h6'>AQI: {data.data.aqi}</Typography>
        <Typography variant='small'>
          Coordinates: {data.data.city.geo}
        </Typography> */}
      </CardBody>
      <CardFooter className='pt-0'>
        <Button>Google Maps</Button>
      </CardFooter>
    </Card>
  );
};

export default Display;
