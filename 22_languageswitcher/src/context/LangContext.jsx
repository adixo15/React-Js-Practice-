import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang(lang === "en" ? "hi" : "en");
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
