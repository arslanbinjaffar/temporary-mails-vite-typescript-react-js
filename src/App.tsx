import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import EmailDetail from "./pages/email/detail/Details";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:id"
          element={<EmailDetail />}
        />
      </Routes>
    </Router>
  );
};

export default App;
