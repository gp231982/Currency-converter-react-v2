import { useEffect, useState } from "react";

const useCustomFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedDate, setFetchedDate] = useState("");
  const [failure, setFailure] = useState("");
  const [currenciesArray, setCurrenciesArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setFailure("");

        // const apiEndpoint = `https://api.exchangerate.host/latest`;
        const apiEndpoint = `https://api.exchangerate.host/latest?base=EUR`;
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        console.log(data);
        setCurrenciesArray(Object.entries(data.rates));
        setFetchedDate(data.date);
        setIsLoading(false);
      } catch (error) {
        setFailure(true);
        setIsLoading(false);
        console.error(error);
      }
    };
    setTimeout(fetchData, 2000);
  },[]);

  return [currenciesArray, isLoading, fetchedDate, failure];
};

export default useCustomFetch;
