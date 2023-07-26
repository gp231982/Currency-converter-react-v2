import FieldSet from "./FieldSet";
import FormItemsList from "./FieldSet/FormItemsList";
import { CalcForm, Result, StyledButton } from "./styled";

const Form = ({
  handleSelectCurrencyFromChange,
  handleSelectCurrencyToChange,
  handleInputMoneyChange,
  calculateResult,
  selectedFrom,
  selectedTo,
  classNameSelectedFrom,
  classNameSelectedTo,
  moneyAmount,
  result,
  resetCalculator,
}) => (
  <CalcForm>
    <FieldSet>
      <FormItemsList
        handleSelectCurrencyFromChange={handleSelectCurrencyFromChange}
        handleSelectCurrencyToChange={handleSelectCurrencyToChange}
        handleInputMoneyChange={handleInputMoneyChange}
        selectedFrom={selectedFrom}
        selectedTo={selectedTo}
        classNameSelectedFrom={classNameSelectedFrom}
        classNameSelectedTo={classNameSelectedTo}
        moneyAmount={moneyAmount}
        calculateResult={calculateResult}
      />
      {
        <StyledButton
          calculateResult={calculateResult}
          result={result}
          type="submit"
          disabled={(moneyAmount && selectedFrom && selectedTo) === ""}
          textContent="Oblicz"
        />
      }
      <Result>Wynik: {result}</Result>
      {
        <StyledButton
          resetCalculator={resetCalculator}
          type="reset"
          textContent="Reset"
        />
      }
    </FieldSet>
  </CalcForm>
);

export default Form;
