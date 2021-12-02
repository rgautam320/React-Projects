import React from "react";
import "./Note.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const NoteCard = (props) => {
   const deleteItem = () => {
      props.deleteItem(props.id);
   };

   return (
      <>
         <div className="col-md-4 col-sm-6 col-11 my-4 note-card">
            <div className="note-box">
               <h3>{props.title}</h3>
               <hr />
               <div className="desc">
                  <p>{props.description}</p>
               </div>
               <Button variant="contained" autoComplete="off" className="my-btn mybtn-del">
                  <DeleteIcon style={{ color: "white" }} onClick={deleteItem} />
               </Button>
            </div>
         </div>
      </>
   );
};

export default NoteCard;
