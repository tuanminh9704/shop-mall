import { BrowserRouter } from "react-router-dom";
import { AllRouter } from "./components/AllRoutes/AllRoutes";

function App() {

  return (
    <BrowserRouter>
      <AllRouter />
    </BrowserRouter>
  );
}

export default App
