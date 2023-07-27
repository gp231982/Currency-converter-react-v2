import useRatesData from "../useRatesData";
import { currencyNames } from "../currencyNames";

const CurrencyOptions = () => {
  const { currenciesArray } = useRatesData();

  return (
    <>
      <option value="" label="Wybierz walutę"></option>
      {currenciesArray.map((currency) => (
        <option key={currency[0]} value={currency[0]}>
          {`${currency[0]} - ${currencyNames[currency[0]]}`}
        </option>
      ))}
    </>
  );
};

export default CurrencyOptions;
