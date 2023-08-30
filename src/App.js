import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { Button } from "@mui/material";
import Header from "./components/Header";
import IndividualBlog from "./components/IndividualBlog";
import Myblog from "./components/Myblog";
import { useLocation } from "react-router";
import { getAuthToken } from "./service/Authtoken";
import BlogComponent from "./components/BlogComponent";
import Update from "./components/Update";
function App() {
  // let location = useLocation();
  // console.log(location);
  const token = getAuthToken();
  console.log(token, "appp");
  return (
    <BrowserRouter>
      {/*{window.location.pathname === "/login" ? <Login /> : <Header />} */}

      <div>
        <Routes>
          if(token)
          {
            <>
              <Route
                exact
                strict
                path="/dashboard"
                element={<BlogComponent />}
              />
              <Route
                exact
                strict
                path="/individual/:id"
                element={<IndividualBlog />}
              />
              <Route exact strict path="/myblogs" element={<Myblog />} />
              <Route exact strict path="/update" element={<Update />} />
            </>
          }
          else
          {
            <>
              <Route exact strict path="/login" element={<Login />} />
              <Route exact strict path="/register" element={<Register />} />
            </>
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
