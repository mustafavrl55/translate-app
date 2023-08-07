import { useState } from "react";
import "./App.scss";
import ProductLeft from "./components/ProductLeft";
import ProductRight from "./components/ProductRight";
import { LanguageContext } from "./context";

function App() {
  const [data, setData] = useState({
    q: "",
    source: "",
    target: "",
    translatedtext: "",
  });

  const [loading, setLoading] = useState(false);

  const handleButton = async () => {
    setLoading(true);
    const res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: data.q,
        source: data.source,
        target: data.target,
        format: "text",
        api_key: "",
      }),
      headers: { "Content-Type": "application/json" },
    });

    const { translatedText } = await res.json();
    setData({ ...data, translatedtext: translatedText });
    setLoading(false);
  };

  return (
    <LanguageContext.Provider value={{ data, setData }}>
      <div className="App">
        <header className="header">
          <h1> Language Translator </h1>
        </header>
        <div className="context">
          <ProductLeft />
          <button
            disabled={loading}
            className="button"
            on
            onClick={() => handleButton()}
          >
            Çevir
          </button>
          <ProductRight />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
