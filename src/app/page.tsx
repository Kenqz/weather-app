"use client";

import Display from "@/components/Display/Display";
import Heading from "@/components/Heading/Heading";
import { DefaultSpinner } from "@/components/Spinner/Spinner";
import { useState } from "react";
import { SelectDefault } from "@/components/Select/Select";

export default function Home() {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setIsError] = useState<string>("");
  const [data, setData] = useState<object>({});

  const handleLoading = (isLoading: boolean, error: string, data: object) => {
    setIsLoading(isLoading);
    setIsError(error);
    setData(data);
  };

  return (
    <div className='flex flex-col gap-5 h-screen align-center mx-auto items-center justify-center'>
      <Heading />
      <SelectDefault handleLoading={handleLoading} />
      {loading ? <DefaultSpinner /> : <Display data={data} />}
    </div>
  );
}
