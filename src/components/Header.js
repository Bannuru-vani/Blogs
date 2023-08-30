import { Typography, Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import BlogComponent from "./BlogComponent";
import { Link } from "react-router-dom";
import { removeToken } from "../service/Authtoken";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const userdetails = useSelector((state) => state.blogReducer.userdetails);

  const logoutBlog = () => {
    removeToken();
    navigate({
      pathname: `/login`,
    });
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          fontFamily: "serif",
        }}
      >
        <span
          style={{
            backgroundColor: "#bae6e9",
            borderRadius: "191px",
            height: "83px",
            width: "fit-content",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          {" "}
          <Typography
            style={{
              fontFamily: "serif",
              marginTop: "10px",
              marginLeft: "29px",
              fontSize: "16px",
              fontWeight: "500px",
            }}
          >
            Lama Blog
          </Typography>
          <Typography
            style={{
              fontFamily: "serif",

              marginLeft: "2px",
              fontSize: "16px",
              fontWeight: "300px",
            }}
          >
            API & TECHNOLOGY
          </Typography>
        </span>

        <span
          style={{
            display: "flex",
            gap: "35px",
            alignItems: "center",
            textAlign: "Center",
            fontFamily: "serif",
          }}
        >
          <Typography style={{ fontFamily: "serif" }}>ART</Typography>
          <Typography style={{ fontFamily: "serif" }}>SCIENCE</Typography>
          <Typography style={{ fontFamily: "serif" }}>TECHNOLOGY</Typography>
          <Typography style={{ fontFamily: "serif" }}>CINEMA</Typography>
          <Typography style={{ fontFamily: "serif" }}>DESIGN</Typography>
          <Typography style={{ fontFamily: "serif" }}>FOOD</Typography>
          <Button
            type="link"
            style={{ fontFamily: "serif" }}
            onClick={() => logoutBlog()}
          >
            LOGOUT
          </Button>
          <span
            style={{
              background: "#bae6e9",
              width: "83px",
              height: "83px",
              borderRadius: "191px",
              textAlign: "center",
            }}
          >
            {" "}
            <Link to="/myblogs">
              <Typography style={{ marginTop: "31px", fontFamily: "serif" }}>
                WRITE
              </Typography>
            </Link>
          </span>
          <span>
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: 600,
                // backgroundColor: "linear-gradient(#eee, #333);",
                // color: "transparent",
              }}
            >
              {userdetails?.name}
            </Typography>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Header;
