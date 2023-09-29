import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./views/HomePage";
import ContactPage from "./views/ContactPage";
import NotFound from "./views/NotFound";
import "./App.css"

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
