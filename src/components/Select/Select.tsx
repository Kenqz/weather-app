import { Select, Option } from "@material-tailwind/react";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { api } from "@/utils/fetcher";

interface Data {
  // terrible
  handleLoading: (isLoading: boolean, error: string, data: object) => void;
}

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export function SelectDefault(props: Data) {
  const [city, setCity] = useState<string>();

  // probably not the best idea
  const { data, isLoading, error } = useSWR(
    `/feed/${city}/?token=${process.env.TOKEN}`,
    fetcher
  );

  const handleChange = (selectedCity: string): void => {
    setCity(selectedCity);
  };

  useEffect(() => {
    props.handleLoading(isLoading, error, data);
  }, [isLoading, error, data, props]);

  return (
    <div className='w-96'>
      <Select
        onChange={handleChange}
        size='lg'
        color='blue'
        value={city}
        label='Select a city to continue'
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <Option value='Belgrade'>Belgrade</Option>
        <Option value='Shangai'>Shangai</Option>
      </Select>
    </div>
  );
}
