import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Container } from "./components/Container/Container";

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <LoginPage />
        {/* <MainPage /> */}
      </Container>
    </div>
  );
};

export default App;
