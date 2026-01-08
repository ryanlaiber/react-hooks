import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./router/AppRoutes";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
