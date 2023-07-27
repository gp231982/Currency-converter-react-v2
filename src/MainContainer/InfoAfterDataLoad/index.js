import { Info, FetchingDate } from "./styled";

const InfoAfterDataLoad = ({ status, fetchedDate }) => {
  return (
    <Info className="infoAfterLoading">
      {status !== "error" && status !== "isLoading" && (
        <>
          Kursy walut pobierane są z Europejskiego Banku Centralnego
          <br />
          aktualne na dzień{" "}
          <FetchingDate className="fetchedDate">{fetchedDate}</FetchingDate>
        </>
      )}
    </Info>
  );
};

export default InfoAfterDataLoad;
