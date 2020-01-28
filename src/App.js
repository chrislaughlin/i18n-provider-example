import React from 'react';
import './App.css';
import TranslationWithProvider from "./TranslationWithProvider";
import TranslationWithHook from "./TranslationWithHook";
import LanguageControls from "./LanguageControls";
import SubComponentOne from "./components/subComponentOne";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LanguageControls/>
        <TranslationWithProvider/>
        <TranslationWithHook/>
        <SubComponentOne/>
      </header>
    </div>
  );
}

export default App;
