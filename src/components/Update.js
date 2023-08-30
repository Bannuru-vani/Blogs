import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Input, Button } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { updateBlog } from "../service/blogservice";
import Header from "./Header";
function Update() {
  const { state } = useLocation();
  const [title, setTitle] = useState(state.title);
  const [subTiTle, setSubTitle] = useState(state.subTitle);
  const [content, setContent] = useState(state.content);
  const [category, setcategory] = useState("example");
  console.log(state, "kkk");
  const editorRef = useRef(null);
  const updateBllogs = async () => {
    console.log(editorRef.current, "lkjhgf");
    let data = {
      title: title,
      subTiTle: subTiTle,
      category: [category],
      content: editorRef.current.getContent(),
    };
    if (editorRef.current) {
    }
    console.log("c");
    let res = await updateBlog(data);
    console.log("ff");
  };
  return (
    <div>
      <Header />
      <div className="editor-name" style={{ width: "500px" }}>
        <Editor
          Header={false}
          apiKey="nr2x4lv09tvxg69g8uczgx8fg4kqaallbzs8rzdm6cy4rcgd"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={content}
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
      </div>

      <div>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input value={subTiTle} onChange={(e) => setSubTitle(e.target.value)} />

        <Input value={category} onChange={(e) => setcategory(e.target.value)} />
      </div>
      <Button
        onClick={() => updateBllogs()}
        style={{
          alignItems: "center",
          textAlign: "center",
          width: "140px",
          height: "40px",
          backgroundColor: "#bae6e9",
          color: "black",
        }}
      >
        Update Blog
      </Button>
    </div>
  );
}

export default Update;
