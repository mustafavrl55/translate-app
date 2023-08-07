import React, { useContext, useRef } from "react";
import BasicSelect from "./Select";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { LanguageContext } from "../context";

const ProductRight = () => {
  const { data, setData } = useContext(LanguageContext);

  const onChange = (event) => {
    setData({ ...data, target: event.target.value });
  };

  const textareaRef = useRef(null);

  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand("copy");
      alert("Metin başarıyla kopyalandı: " + textareaRef.current.value);
    }
  };

  return (
    <div className="product-right">
      <BasicSelect value={data.target} onChange={onChange} />
      <div className="textarea">
        <textarea
          value={data.translatedtext}
          ref={textareaRef}
          name=""
          id=""
          cols="45"
          rows="10"
        ></textarea>
      </div>
      <div className="bottom">
        <FileCopyIcon onClick={handleCopy} />
      </div>
    </div>
  );
};

export default ProductRight;
