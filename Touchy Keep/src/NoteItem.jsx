import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

const NoteItem = (props) => {
   return (
      <>
         <form className="my-form">
            <input name="title" value={props.title} onChange={props.InputEvent} type="text" placeholder="Title" className="d-block note-input note-input-title" />
            <hr />
            <textarea name="content" value={props.content} onChange={props.InputEvent} id="" cols="" rows="" placeholder="Write your note..." className="d-block note-input note-input-note"></textarea>
            <Button variant="contained" onClick={props.addNote} color="secondary" autoComplete="off" className="my-btn">
               <AddIcon />
            </Button>
         </form>
      </>
   );
};

export default NoteItem;
