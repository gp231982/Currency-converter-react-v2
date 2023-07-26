//
import { useState, useEffect } from "react";

const useCustomFetch = () => {
  const [state, setState] = useState({
    isLoading: true,
    fetchedDate: "",
    failure: false,
    currenciesArray: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prevState) => ({ ...prevState, isLoading: true, failure: false }));
        const apiEndpoint = `https://api.exchangerate.host/latest?base=EUR`;
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
          fetchedDate: data.date,
          currenciesArray: Object.entries(data.rates),
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          failure: true,
          isLoading: false,
        }));
      }
    };
    setTimeout(fetchData, 2000);
  }, []);

  return state;
};

export default useCustomFetch;
