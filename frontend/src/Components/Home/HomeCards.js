import React, {useState} from 'react';
import styles from './CSS/HomeCards.module.css';
import {connect} from 'react-redux';
import {AsynStarringBoard} from '../../actions';
import {Link,Redirect} from 'react-router-dom';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function HomeCards(props){
    
    const [open, setOpen] = useState(false);

    const [star, setStar] =useState(props.star);

    function handleClick(){
        setStar(!star);
        setOpen(true);
        let formData ={};
        console.log(props.BoardId);
        
        props.StarringBoard(props.BoardId);
        
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

                <Link className={styles.Link} to={`/b/${props.BoardId}/${props.Title}`} ><p className={styles.boardTitle}>{props.Title}</p> </Link>        
                    <div className={styles.boardCardStar}> 
                    {star ? <StarRoundedIcon onClick={handleClick}/> : 
                    <StarBorderRoundedIcon onClick={handleClick} /> }</div>

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

const mapStateToProps = state => ({
    Home:state.Home,
    
})

const mapDispatchToProps =dispatch => {
  
    return {
       StarringBoard: (id)=> dispatch(AsynStarringBoard(id)),
           }


    } 


export default  connect(mapStateToProps,mapDispatchToProps)(HomeCards);