import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import ViewAll from "./Books/ViewAll";
import Admin from "./Admin";
import Library from "./Library";
import AddBook from "./AddBook";
import AuthorBook from "./AuthorBook";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/log" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/library" element={<Library />} />
        <Route path="/abook" element={<AddBook />} />
        <Route path="/vauthorbook" element={<AuthorBook />} />
        <Route path="/viewall" element={<ViewAll />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;