import React from "react";

// context
import { MainProvider } from "./contexts/MainContext";

// components
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <MainProvider>
      <div className="main-wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </MainProvider>
  );
};

export default App;
