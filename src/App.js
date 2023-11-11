import { useState, useEffect, createContext } from "react";
// import FileUpload from "./Forms/FileUpload";
// import TaxFraud1 from "./Forms/TaxFraud1";
import TaxFraud2 from "./Forms/TaxFraud2";
import TaxEvasion from "./Forms/TaxEvasion";
import CashRegister from "./Forms/CashRegister";
import Translation from "./Translation/Data.json";
import Header from "./Forms/Header"

export const Trans = createContext(null);

function App() {
  const [language, setLanguage] = useState("amharic");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === "english") {
      setContent(Translation.english);
    } else if (language === "amharic") {
      setContent(Translation.amharic);
    }
  });

  const [type, setType] = useState("taxfraud");
  const handleChange = (e) => {
    setType(e.target.value);
  };
  const HandleForms = () => {
    if (type === "Cash Register") {
      return <CashRegister />;
    } else if (type === "Tax Evasion") {
      return <TaxEvasion />;
    } else {
      return <TaxFraud2 />;
    }
  };

  return (
    <div className="App ">
      <Header/>
      <div className="main">
        <div className=" my-4 md:flex  md:justify-end mr-32 ">
          <button
            onClick={() => {
              setLanguage("english");
            }}
            className="btn"
          >
            English
          </button>
          <button
            onClick={(e) => {
              setLanguage("amharic");
            }}
            className="btn"
          >
            አማርኛ
          </button>
        </div>
      </div>
      <Trans.Provider value={{ content }}>
        <div className=" main">
          <div className="firstForm">
            <label className="formLabel ">{content.select}</label>
            <div className="my-4">
              <select
                className="border-gray-300 border-2 w-48  rounded-md h-10 p-1"
                value={type}
                onChange={handleChange}
              >
                <option value="Tax Fraud">{content.taxfraud}</option>
                <option value="Tax Evasion">{content.taxevasion}</option>
                <option value="Cash Register">{content.cashregister}</option>
              </select>
            </div>
          </div>
        </div>

        <HandleForms />
        {/* <TaxEvasion /> */}
      </Trans.Provider>
    </div>
  );
}

export default App;
