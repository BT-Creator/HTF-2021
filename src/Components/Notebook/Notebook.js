import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { NotebookContent } from "./NotebookContent";

const Notebook = () => {
  const [isShown, setShow] = useState(false);

  const toggleNotes = () => {
    setShow(!isShown);
  };

  return (
    <div>
      {isShown ? (
        <div id="notebook" className={"notes"} display="none">
          <h2 className={"notes-title"}>
            Notities
            <FaTimes
              size={20}
              onClick={toggleNotes}
              style={{ cursor: "pointer" }}
            />
          </h2>
          <NotebookContent />
        </div>
      ) : (
        <button onClick={toggleNotes} className="notes-btn" value={"Notities"}>
          Notities
        </button>
      )}
    </div>
  );
};

export default Notebook;
