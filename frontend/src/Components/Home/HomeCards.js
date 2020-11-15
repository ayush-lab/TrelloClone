import React, {useState} from 'react';
import styles from './CSS/HomeCards.module.css';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AuthService from '../../ApiServices/services';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function HomeCards(){
   
    const [open, setOpen] = useState(false);

    const [star, setStar] =useState(false);

    function handleClick(){
        setStar(!star);
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };


  

      return(
            <>
               
                <div className={styles.boardsCardSection}>

                    <p className={styles.boardTitle}>Flow the new Trello </p>        
                    <div className={styles.boardCardStar}> 
                    {star ? <StarRoundedIcon onClick={handleClick}/> : <StarBorderRoundedIcon onClick={handleClick} /> }</div>

                </div>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    {
                    star ? <Alert onClose={handleClose} severity="success">
                        Your board has been successfully <b>starred</b>!
                    </Alert> : 
                    
                    <Alert onClose={handleClose} severity="success">
                        Your board has been successfully <b>unstarred</b>!
                    </Alert>
                    
                    }
                    
                </Snackbar>

            </>
        );
    

}

export default HomeCards;