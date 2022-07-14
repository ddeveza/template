import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route />
    </Routes>
  );
}

export default App;
