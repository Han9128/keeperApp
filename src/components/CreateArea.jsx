import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handeleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content,
        };
      } else {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });
  }
  function submitNote(event) {
    props.onClick(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  const [isClicked, setClick] = useState(false);
  function handleClick() {
    setClick(true);
    console.log(isClicked);
  }
  return (
    <div>
      <form className="create-note">
        {isClicked && (
          <input
            name="title"
            placeholder="Title"
            onChange={handeleChange}
            value={note.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          onChange={handeleChange}
          value={note.content}
          onClick={handleClick}
        />

        <Zoom in={isClicked}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
