import { Navbar } from "./components/Navbar/Navbar";
import { Home, Components } from "./pages/index";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
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
  );
}
