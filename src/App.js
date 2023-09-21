import "./css/utility.css";
import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home, Components } from "./pages/index";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  AlertDoc,
  AvatarDoc,
  BadgeDoc,
  ButtonDoc,
  CardDoc,
  HeadingDoc,
  TextDoc,
  ImageDoc,
} from "./documentation/index";
import { Sidebar } from "./components/index";

export default function App() {
  let location = useLocation();

  const showSidebar = !(
    location.pathname === "/" || location.pathname === "/components"
  );

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>

      <div className="main">
        {showSidebar && <Sidebar />}

        <Routes>
          <Route path="/avatar" element={<AvatarDoc />} />
          <Route path="/alert" element={<AlertDoc />} />
          <Route path="/badge" element={<BadgeDoc />} />
          <Route path="/button" element={<ButtonDoc />} />
          <Route path="/card" element={<CardDoc />} />
          <Route path="/heading" element={<HeadingDoc />} />
          <Route path="/text" element={<TextDoc />} />
          <Route path="image" element={<ImageDoc />} />
        </Routes>
      </div>
    </div>
  );
}
