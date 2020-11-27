import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './CSS/Checklist.module.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
//import AuthService from '../../ApiServices/services'
import {connect} from 'react-redux';
import {AsynArchive} from '../../actions';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function SimpleMenuu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose1 = () => {
    setAnchorEl(null);

    let formData={};
    formData ={"archived":true}
    console.log("ARCHIVED",props.cardId)
   
    props.archive(props.cardId,formData); 
    setOpen(true);  
  }
 

  
  

  const handleCloseAlert = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };


  const handleClose2 = () => {
    setAnchorEl(null);

  }

  const handleClose3 = () => {
    setAnchorEl(null);

  }

  const handleClose = () => {
    setAnchorEl(null);

  }


  
  return (
    <div>
     
      <Button aria-controls="simple-menu"  className={styles.dropDown} 
        aria-haspopup="true" onClick={handleClick}>
          {props.Menu}
      </Button>


      <Menu
        id="simple-menu"
       
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose1}>{props.option1}</MenuItem>
        <MenuItem onClick={handleClose2}>{props.option2}</MenuItem>
        <MenuItem onClick={handleClose3}>{props.option3}</MenuItem>
      </Menu>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseAlert}>
                    {
                   
                    <Alert onClose={handleCloseAlert} severity="success">
                        Card Archived <b>successfully</b>!
                    </Alert>
                    
                    }
                    
                </Snackbar>

    </div>
  );
}

const mapDispatchToProps =dispatch => {
  
  return {
      archive: (cardId,data)=> dispatch(AsynArchive(cardId,data)),
      
         }


  } 

const SimpleMenu =connect(
  state=>({
    archive:state.lists
  }), mapDispatchToProps)(SimpleMenuu);



export default SimpleMenu;