import React, { useEffect } from "react";
import { Typography, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getIndividualBlogData } from "../action/blogAction";
import { useParams } from "react-router-dom";
import blogimage from "../../src/images/gym.jpg";
import Header from "./Header";
function IndividualBlog() {
  const { individualblogData } = useSelector(
    (state) => state.individualblogReducer
  );
  const params = useParams();
  const id = params.id;
  console.log(individualblogData, id, "mmmm");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIndividualBlogData(id));
  }, [id]);

  return (
    <div style={{ marginTop: "10px" }}>
      <Header />
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px",
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: individualblogData?.content }}
          ></div>
        </div>
      </>

      <div></div>
    </div>
  );
}

export default IndividualBlog;
