import { Typography, Button, notification, Input, Radio } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyBlogs, getuser } from "../action/blogAction";
import "./login.css";
import momemt from "moment";
import { Editor } from "@tinymce/tinymce-react";
import clap from "../../src/images/clap.png";
import avatar from "../../src/images/avtar.jpg";
import { useNavigate } from "react-router-dom";

import { EditFilled, DeleteTwoTone, LikeOutlined } from "@ant-design/icons";
import {
  bloglikes,
  createBlog,
  deleteBlog,
  getClap,
} from "../service/blogservice";
import Header from "./Header";
function Myblog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuser());
    dispatch(getMyBlogs());
  }, []);
  const userdetails = useSelector((state) => state.blogReducer.userdetails);
  const [title, setTitle] = useState("bLOG1");
  const [subTiTle, setSubTitle] = useState("sub title");
  const [content, setContent] = useState("");
  const [category, setcategory] = useState("example");
  const navigate = useNavigate();
  const MYBlogs = useSelector((state) => state.blogReducer.MYBlogs);
  const deletedBlogs = async (item) => {
    console.log(item);
    const res = await deleteBlog(item._id);
    if (res.status == 200) {
      dispatch(getMyBlogs());
    }

    console.log(res, "deekre");
  };

  const authorname = userdetails?.name;
  const posteddate = momemt(userdetails?.createdAt).format("YYYY/MM/DD");

  const updateblog = (item) => {
    navigate("/update", {
      state: item,
    });
  };

  console.log(userdetails, "blogData", posteddate);
  const editorRef = useRef(null);

  const createBllogs = async () => {
    // console.log(res, "create");
    if (editorRef.current) {
      //  let dataa = editorRef.current.getContent();
      let data = {
        title: title,
        subTitle: subTiTle,
        category: [category],
        content: editorRef.current.getContent(),
      };
      console.log(data, editorRef.current.getContent());
      // var data = dataa;
      // var json = JSON.stringify(data);
      // console.log(json);
      const res = await createBlog(data);

      // console.log(res);
    }
  };
  const clapscount = async (item) => {
    let res = await getClap(item._id);
    console.log(res, "resclp");
    if (res.status == 200) {
      console.log("jj");
    } else {
      console.log("err");
    }
  };
  const getClapsforblogs = async (item) => {
    let res = await bloglikes(item._id);
    if (res.status == 200) {
      notification.success({ message: res.data.message });
    }
    console.log(res);
  };
  return (
    <div style={{ marginTop: "10px" }}>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div></div>
        <div>
          <Editor
            apiKey="nr2x4lv09tvxg69g8uczgx8fg4kqaallbzs8rzdm6cy4rcgd"
            onInit={(evt, editor) => (editorRef.current = editor)}
            // initialValue=<div>
            //   <h1>"blog1"</h1>
            //   <p>{subTiTle}</p>
            // </div>
            init={{
              height: 500,
              width: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              gap: "25px",
              marginTop: "10px",
            }}
          >
            <Input
              className="createblog"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              className="createblog"
              value={subTiTle}
              onChange={(e) => setSubTitle(e.target.value)}
            />

            <Input
              className="createblog"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            />
            <Button
              onClick={() => createBllogs()}
              style={{
                alignItems: "center",
                textAlign: "center",
                width: "140px",
                height: "40px",
                backgroundColor: "#bae6e9",
                color: "black",
              }}
            >
              Create Blog
            </Button>
          </div>
        </div>
      </div>

      {MYBlogs.map((item) => (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span style={{ width: "825px" }}>
              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </span>
          </div>
          <div className="myblogs">
            <div></div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginLeft: "15px",
                alignItems: "center",
              }}
            >
              <span>
                <img
                  style={{ width: "85px", height: "85px" }}
                  src={avatar}
                  alt=""
                />
              </span>
              <span style={{ marginTop: "13px" }}>
                <Typography style={{ fontWeight: 600, fontSize: "18px" }}>
                  {authorname}
                </Typography>
                <Typography>Posted On {posteddate}</Typography>
              </span>

              <span style={{ marginTop: "13px", display: "flex", gap: "10px" }}>
                <span className="edit">
                  <Button type="link" onClick={() => updateblog(item)}>
                    <EditFilled
                      style={{
                        color: "white",
                        textAlign: "center",
                        marginTop: "4px",
                        marginLeft: "-10px",
                      }}
                    />
                  </Button>
                </span>
                <span className="delete">
                  <Button type="link" onClick={() => deletedBlogs(item)}>
                    <DeleteTwoTone
                      style={{
                        color: "white",
                        textAlign: "center",
                        marginTop: "4px",
                        marginLeft: "-9px",
                      }}
                    />
                  </Button>
                </span>
                <span style={{ marginTop: "11px", marginLeft: "7px" }}>
                  <Button type="link" onClick={() => getClapsforblogs(item)}>
                    <LikeOutlined style={{ fontSize: "20px" }} />
                  </Button>
                </span>
                <span>
                  <Button type="link" onClick={() => clapscount(item)}>
                    <img
                      src={clap}
                      alt="clap

              "
                      style={{ width: "50px", marginTop: "-7px" }}
                    />
                  </Button>
                </span>
              </span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Myblog;
