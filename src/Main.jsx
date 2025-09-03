import PopX from "./pages/PopX";
import LoginPage from "./pages/LoginPage";
import ReactDOM from "react-dom/client";
import Signup from "./pages/Signup";
import AccountSettings from "./pages/AccountSetting";
import { BrowserRouter as Router, Route, Routes } from "react-router";

function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/" element={<PopX/>}></Route>
          <Route path="/accountsetting" element={<AccountSettings/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<Main />);
