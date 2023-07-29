import { useState, useEffect } from "react";

const useRatesData = () => {
  const [state, setState] = useState({
    fetchedDate: "",
    status: "isLoading",
    currenciesArray: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          status: "isLoading",
          failure: false,
        }));
        const apiEndpoint = `https://api.exchangerate.host/latest?`;
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setState((prevState) => ({
          ...prevState,
          status: "success",
          fetchedDate: data.date,
          currenciesArray: Object.entries(data.rates),
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          status: "error",
        }));
      }
    };
    setTimeout(fetchData, 2000);
  }, []);

  return state;
};

export default useRatesData;
