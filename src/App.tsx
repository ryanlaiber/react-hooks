import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <div>
      <div>HEADER</div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
