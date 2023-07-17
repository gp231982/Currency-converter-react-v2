import CurrencyOptions from "../CurrencyOptions";
import { MoneyInput } from "../Input/styled";

const Select = ({
  handleSelectCurrencyFromChange,
  handleSelectCurrencyToChange,
  selectedFrom,
  selectedTo,
  id,
  classNameSelectedFrom,
  classNameSelectedTo,
}) => {
  return (
    <MoneyInput
      as="select"
      style={{ cursor: "pointer" }}
      value={id === "currencyFrom" ? selectedFrom : selectedTo}
      className={
        id === "currencyFrom"
          ? classNameSelectedFrom
          : id === "currencyTo"
          ? classNameSelectedTo
          : ""
      }
      required
      name="waluta"
      id={id}
      onChange={
        id === "currencyFrom"
          ? (e) => handleSelectCurrencyFromChange(e.target.value)
          : (e) => handleSelectCurrencyToChange(e.target.value)
      }
    >
      {<CurrencyOptions />}
    </MoneyInput>
  );
};

export default Select;
