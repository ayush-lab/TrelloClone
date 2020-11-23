import React, {useState} from 'react';
import styles from './CSS/home.module.css';
import {Link,Redirect} from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';

function TeamCards(props){
    
    const [open, setOpen] = useState(false);

    const [star, setStar] =useState(props.star);

    function handleClick(e){
        e.preventDefault();
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
            <div className={styles.BoardSection}>
                   <div className={styles.BoardSectionName}>

                            <div><PeopleIcon className={styles.PeopleIcon}/></div>
                            <span className={styles.BoardType}> {props.name} </span>
                                        
                    </div>
    
                    <div className={styles.TeamCardSection}> 
                        <div className={styles.TeamCardName}>
                            <Link  style={{ textDecoration: 'none', color:'#9263FF' }} 
                            exact to={`/team/${props.id}/`} >
                            
                                <p className={styles.TeamTitle}>Boards</p>
                           
                             </Link>
                        </div>

                        <div className={styles.TeamMemebers}>
                                <p>Members({props.members.length})</p>
                        </div>

                    </div>

                       
                       
            </div>
             

              

            </>
        );
    

}




export default  TeamCards;