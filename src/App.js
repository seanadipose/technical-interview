import "./styles.css";
import { useState } from "react";
import { JavaScriptSection } from "./JavascriptSection";
import { ReactSection } from "./ReactSection";
import { CssSection } from "./CssSection";
export default function App() {
  const [page, setPage] = useState("css");

  /** Use destructuring assignment to initiate username and email variables */
  const pages = {
    javascript: <JavaScriptSection />,
    react: <ReactSection />,
    css: <CssSection />
  };

  return (
    <div className="App">
      {page !== "css" ? (
        Object.keys(pages).map((key) => (
          <button onClick={() => setPage(key)}>{key}</button>
        ))
      ) : (
        <></>
      )}
      {pages[page]}
    </div>
  );
}
