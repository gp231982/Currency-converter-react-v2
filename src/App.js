import "./App.css";
import MainContainer from "./MainContainer";
import Form from "./MainContainer/Form";
import { useState } from "react";
import ActualDate from "./MainContainer/ActualDate";
import InfoAfterDataLoad from "./MainContainer/InfoAfterDataLoad";
import useCustomFetch from "./useCustomFetch";

function App() {
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [classNameSelectedFrom, setclassNameSelectedFrom] = useState("");
  const [classNameSelectedTo, setclassNameSelectedTo] = useState("");
  const [moneyAmount, setMoneyAmount] = useState("");
  const [result, setResult] = useState("");
  const { currenciesArray, isLoading, fetchedDate, failure } = useCustomFetch();

  const handleSelectCurrencyFromChange = (selectedFrom) => {
    setSelectedFrom(selectedFrom);

    selectedFrom === ""
      ? setclassNameSelectedFrom("")
      : setclassNameSelectedFrom("active");
  };

  const handleSelectCurrencyToChange = (selectedTo) => {
    setSelectedTo(selectedTo);

    selectedTo === ""
      ? setclassNameSelectedTo("")
      : setclassNameSelectedTo("active");
  };

  const handleInputMoneyChange = (moneyAmount) => {
    setMoneyAmount(moneyAmount);
  };

  const calculateResult = (e) => {
    e.preventDefault();
    const rateFrom = currenciesArray.find(
      (currency) => currency[0] === selectedFrom
    )[1];
    const rateTo = currenciesArray.find(
      (currency) => currency[0] === selectedTo
    )[1];
    const result = ((moneyAmount * rateTo) / rateFrom).toFixed(2);
    const calculation = `Za ${moneyAmount} ${selectedFrom} kupisz ${result} ${selectedTo}`;
    setResult(calculation);
  };

  const resetCalculator = () => {
    setMoneyAmount("");
    setSelectedFrom("");
    setSelectedTo("");
    setclassNameSelectedFrom("");
    setclassNameSelectedTo("");
    setResult("");
  };

  return (
    <div className="App">
      {isLoading ? (
        <p className="load">Jeszcze chwilkę , waluty się ładują ... 😁🤑</p>
      ) : !isLoading && failure ? (
        <p className="load failure">
          Przykro mi😟😕, ale coś poszło nie tak. <br /> Sprawdź czy adres jest
          poprawny i spróbuj jeszcze raz....
        </p>
      ) : (
        <MainContainer>
          <ActualDate />
          <Form
            moneyAmount={moneyAmount}
            handleSelectCurrencyFromChange={handleSelectCurrencyFromChange}
            handleSelectCurrencyToChange={handleSelectCurrencyToChange}
            handleInputMoneyChange={handleInputMoneyChange}
            calculateResult={calculateResult}
            selectedFrom={selectedFrom}
            selectedTo={selectedTo}
            classNameSelectedFrom={classNameSelectedFrom}
            classNameSelectedTo={classNameSelectedTo}
            result={result}
            resetCalculator={resetCalculator}
          />
          <InfoAfterDataLoad
            failure={failure}
            fetchedDate={fetchedDate}
            isLoading={isLoading}
          />
        </MainContainer>
      )}
    </div>
  );
}

export default App;
