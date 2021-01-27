import React, {useState} from 'react';
import styles from './visibility.module.css';
// import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {AsynArchive} from '../../actions';
import EmptyCart from '../../assets/Images/EmptyCart.png';
//import AuthService from '../../ApiServices/services'
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Member(props){

   
    let {LISTS} =props; 
    console.log(LISTS)
    let Archived_items=null;
    let count=0;

    const [open, setOpen] = React.useState(false);
    
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };


    const unarchive = (cardId)=>{
        

        let formData={};
        formData ={"archived":false}
        console.log("ARCHIVED",cardId)
    
        props.archive(cardId,formData); 
        setOpen(true);  
   
    }

    if(LISTS)
        {Archived_items=  (
            <div className={styles.ArchiveModal}>
                <h5 className="mb-4"  className={styles.EmptyCartheading}>Your Archive cards </h5>
            {LISTS.list.lists.map(
                item=>{
                
                return(
                item.cards.filter(card=>card.archived===true)
                .map(card =>{
                   count+=1;
                    return(
                        <div className={styles.card}>
                            <div className={styles.CardList}>
                                    {card.name}
                            </div>

                            <button  onClick={()=>unarchive(card.id)}>Unarchive</button>
                         </div>
                    )
                }))
            }
        )}
        </div>
    
    )
   // console.log(count)
     if(count===0){
         
         Archived_items = (
         <div>
             <h5 className={styles.EmptyCartheading}>Empty Archive list</h5>
                <img src={EmptyCart} className={styles.EmptyCart}/>
         </div>)
     }
    }


      return(
            
             
             
        <div className={styles.archiveList}>
                
            
               {Archived_items}

               <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseAlert}>
                    {
                   
                    <Alert onClose={handleCloseAlert} severity="success">
                        Card Unarchived <b>successfully</b>!
                    </Alert>
                    
                    }
                    
                </Snackbar>
        </div>
                

        );
    

}

const mapStateToProps = state => ({
    LISTS:state.lists,
})

const mapDispatchToProps =dispatch => {
  
    return {
        archive: (cardId,data)=> dispatch(AsynArchive(cardId,data)),
           }


    } 




export default   connect(mapStateToProps,mapDispatchToProps)(Member);