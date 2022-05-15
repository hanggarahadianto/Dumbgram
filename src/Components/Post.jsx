import React from "react";
import { useState, useEffect } from "react";
function Post() {
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    caption: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };
  return (
    <div>
      <div>
        {preview && (
          <div>
            <img className="" src={preview} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
