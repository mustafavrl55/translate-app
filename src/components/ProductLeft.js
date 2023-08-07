import React, { useContext, useRef } from "react";
import BasicSelect from "./Select";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CloseIcon from "@mui/icons-material/Close";
import { LanguageContext } from "../context";

const ProductLeft = () => {
  const textareaRef = useRef(null);

  const { data, setData } = useContext(LanguageContext);

  const onChange = (event) => {
    setData({ ...data, source: event.target.value });
  };

  const textValue = (event) => {
    setData({ ...data, q: event.target.value });
  };

  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand("copy");
      alert("Metin başarıyla kopyalandı: " + textareaRef.current.value);
    }
  };

  const clearButton = () => {
    setData({ ...data, q: "", translatedtext: "" });
  };

  return (
    <div className="product-left">
      <BasicSelect value={data.source} onChange={onChange} />

      <div className="textarea">
        <textarea
          value={data.q}
          ref={textareaRef}
          name=""
          id=""
          cols="45"
          rows="10"
          onChange={(e) => textValue(e)}
        ></textarea>
      </div>
      <div className="bottom">
        <FileCopyIcon onClick={handleCopy} />
        <CloseIcon onClick={clearButton} />
      </div>
    </div>
  );
};

export default ProductLeft;
