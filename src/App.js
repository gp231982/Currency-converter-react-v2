import "./App.css";
import MainContainer from "./MainContainer";
import Form from "./Form";
import { useState } from "react";
import ActualDate from "./ActualDate";
import InfoAfterDataLoad from "./InfoAfterDataLoad";
import { currencies } from "./currencies";
import useCustomFetch from "./useCustomFetch";

function App() {
  const [exchangeRate, setExchangeRate] = useState("");
  const [tableDataFrom, settableDataFrom] = useState("");
  const [tableDataTo, settableDataTo] = useState("");
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [classNametableDataFrom, setClassNametableDataFrom] = useState("");
  const [classNametableDataTo, setClassNametableDataTo] = useState("");
  const [moneyAmount, setMoneyAmount] = useState("");
  const [result, setResult] = useState("");
  const [currenciesArray, isLoading, fetchedDate, failure] = useCustomFetch();

  const handleSelectCurrencyFromChange = (selectedFrom) => {
    setSelectedFrom(selectedFrom);

    selectedFrom === ""
      ? setClassNametableDataFrom("")
      : setClassNametableDataFrom("active");
  };

  const handleSelectCurrencyToChange = (selectedTo) => {
    setSelectedTo(selectedTo);

    selectedTo === ""
      ? setClassNametableDataTo("")
      : setClassNametableDataTo("active");
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

    console.log(selectedFrom);
    console.log(rateFrom);
    console.log(rateTo);

    const calculation = `Za ${moneyAmount} ${selectedFrom} kupisz ${result} ${selectedTo}`;

    setResult(calculation);
  };

  const resetCalculator = () => {
    setMoneyAmount("");
    settableDataFrom("");
    settableDataTo("");
    setSelectedFrom("");
    setSelectedTo("");
    setClassNametableDataFrom("");
    setClassNametableDataTo("");
    setExchangeRate("");
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
            exchangeRate={exchangeRate}
            // tableDataFrom={tableDataFrom}
            // tableDataTo={tableDataTo}
            moneyAmount={moneyAmount}
            handleSelectCurrencyFromChange={handleSelectCurrencyFromChange}
            handleSelectCurrencyToChange={handleSelectCurrencyToChange}
            handleInputMoneyChange={handleInputMoneyChange}
            calculateResult={calculateResult}
            selectedFrom={selectedFrom}
            selectedTo={selectedTo}
            classNametableDataFrom={classNametableDataFrom}
            classNametableDataTo={classNametableDataTo}
            currencies={currencies}
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
