import { Typography, Button } from "antd";
import React, { useEffect, Fragment } from "react";
import { data } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { getBlogData } from "../action/blogAction";
import blogimage from "../../src/images/gym.jpg";
import { useNavigate } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import Header from "./Header";
function BlogComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    dispatch(getBlogData());
  }, []);
  const { blogData } = useSelector((state) => state.blogReducer);

  console.log(blogData, "blogData");
  const individualBlogContent = (id) => {
    console.log(id);

    navigate(`/individual/${id}`);
  };

  return (
    <div>
      <Header />
      {blogData.map((item) => (
        <Fragment>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <span style={{ width: "825px" }}>
              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              <Button
                style={{ marginTop: "15px", padding: "9px 26px 30px 29px" }}
                onClick={() => individualBlogContent(item._id)}
              >
                Read More
              </Button>
            </span>
          </div>
        </Fragment>
      ))}
      <div></div>
    </div>
  );
}

export default BlogComponent;
