import './App.css';
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { ExpenseTracker } from "./pages/expense-tracker/index";
function App() {
  return (
    <div className="App">
      <Switch>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
