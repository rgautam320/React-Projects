import React, { Fragment, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@material-ui/core";
import "./LiveScore.css";
import { getScore } from "./API";

const vs = "https://raw.githubusercontent.com/nothing3669/Images/main/vs-removebg-preview.png";

const ScoreCard = ({ match }) => {
   const [open, setOpen] = useState(false);
   const [detail, setDetail] = useState({});

   const buttonHandle = (id) => {
      getScore(id)
         .then((data) => setDetail(data))
         .then((error) => console.log(error));

      handleOpen();
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleOpen = () => {
      setOpen(true);
   };

   const getMatchCard = () => {
      return (
         <>
            <div className="my-card my-3">
               <div className="row">
                  <div className="col-5 d-flex justify-content-center align-items-center">{match["team-1"]}</div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                     <figure>
                        <img height="auto" width="100%" src={vs} alt="V/S" />
                     </figure>
                  </div>
                  <div className="col-5 d-flex justify-content-center align-items-center">{match["team-2"]}</div>
               </div>
               <div className="row">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                     <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                           buttonHandle(match.unique_id);
                        }}
                     >
                        Details
                     </Button>
                  </div>
                  <div className="col-9 d-flex justify-content-center align-items-center">
                     <Button variant="outlined" color="secondary">
                        Start {new Date(match.dateTimeGMT).toLocaleString()}
                     </Button>
                  </div>
               </div>
            </div>
         </>
      );
   };

   const getDialog = () => (
      <Dialog open={open} onClose={handleClose}>
         <DialogTitle id="alert-dialog-title">{"Match Detail ..."}</DialogTitle>
         <DialogContent>
            <DialogContentText id="alert-dialog-description">
               <Typography>{detail.stat}</Typography>
               <Typography>
                  Match <span style={{ fontWeight: "bold" }}>{detail.matchStarted ? "Started" : "Stil Not Started"}</span>
               </Typography>
               <Typography>
                  Score <span style={{ fontWeight: "bold" }}>{detail.score}</span>
               </Typography>
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus></Button>
         </DialogActions>
      </Dialog>
   );
   return (
      <Fragment>
         {getMatchCard()}
         {getDialog()}
      </Fragment>
   );
};

export default ScoreCard;
