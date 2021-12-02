import React, { useState, useEffect } from "react";
import "./Note.css";
import NoteCard from "./NoteCard";
import NoteItem from "./NoteItem";

const Note = () => {
   // Getting locally stored values
   let Note;
   if (localStorage.getItem("Notes") === null) {
      Note = [];
   } else {
      Note = JSON.parse(localStorage.getItem("Notes"));
   }

   // Defining Hooks
   const [note, setNote] = useState({
      title: "",
      content: "",
   });

   const [addItem, setAddItem] = useState(Note);

   // Getting Input
   const InputEvent = (event) => {
      const { name, value } = event.target;

      setNote((oldValue) => {
         return { ...oldValue, [name]: value };
      });
   };

   // Adding Note
   const addNote = () => {
      if (note.title && note.content) {
         setAddItem((prevData) => {
            return [...prevData, note];
         });
      }
      setNote({
         title: "",
         content: "",
      });
   };

   // Deleting Note
   const onDelete = (id) => {
      setAddItem((prevData) =>
         prevData.filter((val, index) => {
            return index !== id;
         })
      );
   };

   // Storing data in Local Storage
   Note = JSON.parse(localStorage.getItem("Notes"));

   useEffect(() => {
      localStorage.setItem("Notes", JSON.stringify(addItem));
   }, [addItem]);

   return (
      <>
         <div className="container my-3">
            <h1 className="text-center font-weight-bolder">My Notes</h1>
            <hr />
            <div className="row mb-4">
               <div className="col-md-4 col-11 mx-auto">
                  <NoteItem title={note.title} content={note.content} InputEvent={InputEvent} addNote={addNote} />
               </div>
            </div>
            <hr />
            <div className="row">
               {addItem.map((val, ind) => {
                  return <NoteCard key={ind} id={ind} title={val.title} description={val.content} deleteItem={onDelete} />;
               })}
            </div>
         </div>
      </>
   );
};

export default Note;
