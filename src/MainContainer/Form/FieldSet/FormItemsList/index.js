import InputListItem from "./InputListItem";
import SelectListItem from "./SelectListItem";
import Input from "./InputListItem/Input";
import Select from "./SelectListItem/Select";
import { List } from "./styled";

const FormItemsList = ({
  handleSelectCurrencyFromChange,
  handleSelectCurrencyToChange,
  handleInputMoneyChange,
  selectedFrom,
  selectedTo,
  classNameSelectedFrom,
  classNameSelectedTo,
  moneyAmount,
}) => (
  <List className="formItemsList__ul">
    <InputListItem
      labelText={"money"}
      spanText={"Wpisz kwotę*"}
      input={
        <Input
          id={"money"}
          type={"number"}
          min={"1"}
          step={"1"}
          placeholder={"Wpisz kwotę"}
          autofocus={true}
          handleInputMoneyChange={handleInputMoneyChange}
          moneyAmount={moneyAmount}
        />
      }
    />
    <SelectListItem
      labelText={"currencyFrom"}
      spanText={"Przelicz z:*"}
      select={
        <Select
          id={"currencyFrom"}
          handleSelectCurrencyFromChange={handleSelectCurrencyFromChange}
          selectedFrom={selectedFrom}
          classNameSelectedFrom={classNameSelectedFrom}
          classNameSelectedTo={classNameSelectedTo}
        />
      }
    />
    <SelectListItem
      labelText={"currencyTo"}
      spanText={"Przelicz na:*"}
      select={
        <Select
          id={"currencyTo"}
          handleSelectCurrencyToChange={handleSelectCurrencyToChange}
          selectedTo={selectedTo}
          classNameSelectedFrom={classNameSelectedFrom}
          classNameSelectedTo={classNameSelectedTo}
        />
      }
    />
  </List>
);

export default FormItemsList;
