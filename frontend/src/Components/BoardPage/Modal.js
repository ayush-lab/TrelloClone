import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import style from './CSS/Modal.module.css';
import Button from '@material-ui/core/Button';
import Member from './memberAdd';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [type,setType] = React.useState('');
  const [id,setId] = React.useState('');


  
  const handleOpen = () => {
    setOpen(true);
    setType('card');
    setId(props.cardId);
  };

  const handleOpenList = ()=> {
    setOpen(true);
    setType('list');
    setId(props.BoardId);
  }


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
      {
        props.button ==="card"?<Button variant="outlined"  onClick={handleOpen} className={style.buttonFeatures}>Members</Button>:
        
        <div onClick={handleOpenList}  className="nav-link team-board-visibility-nav"> 
        <span className="users-visibility-nav">Invite </span>
        <i data-toggle="tooltip" data-placement="top" title="Bookmarked Courses"
        className="fa fa-users users-nav ml-1" aria-hidden="true"></i></div>
      }
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Member type={type} BoardId={id}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}