import React from 'react';
import styles from './CSS/Profile.module.css';
import Avatar from '@material-ui/core/Avatar';
import Navbar from '../Navigation/Navbar';
import AuthService from '../../ApiServices/services'
import Alerts from '../Alert/Alert';


function Profile(props){

    
    const [userId,setuserId]=React.useState(props.match.params.userId);
    const [user,setUser]=React.useState(null);
    const [name,setUserName]=React.useState(null);
    const [userbioo,setUserBio]=React.useState(null);
    const [Alert,setAlert]=React.useState(null);
    

    React.useEffect( ()=>{
        AuthService.Profile(userId)
        .then(response => {
            console.log('Response:', response) 
            if(response.status ===201 || response.status ===200 || response.status ===202) 
                { 
                setUser(response.data);
            
                }
            
            else if(response.status===401) alert("Something went wrong")})
            
        .catch(error=>{console.log(error.response); 
           
            
        })
  
      }, []);
      

      const inputHandlerBio=(event)=>{
        setUserBio(event.target.value);
        console.log(userbioo)
      }

      const inputHandlerName=(event)=>{
        setUserName(event.target.value);
        console.log(name)
  }

      const sumbitHandler=()=>{

        let formData={};
        formData ={profile: {
            "name":name,
            "bio":userbioo,
        }}

        if(formData['name']===null){
            setAlert({type:"warning",text:"Username can't be left blank"})
        }

        if(formData['name']!==null){
            AuthService.EditProfile(userId,formData)
            .then(response => {

                console.log('Response:', response) 
                if(response.status ===201 || response.status ===200 || response.status ===202) 
                
                    { 
                    
                    setUser(response.data);
                    setAlert(null)
                    
                
                    }})
                
                
            .catch(error=>{console.log(error.response); 
                setAlert({type:"warning",text:"Username can't be left blank"})
                
            })
       }
      }


      let userName,bio,id=null;

      if(user!==null){
        userName=user.profile.name;
        bio=user.profile.bio;
        if(bio===null){
            bio="wanna be chad";
        }
        id=user.profile.id;
    }
    
    let alert;

    if(Alert!==null)
        alert = (<Alerts type={Alert.type} text={Alert.text} />);

    return (
        <>
        <Navbar/>
        {alert}
        <div className={styles.profileSection}>
            <div className={styles.profile}>
                    <Avatar className={styles.avatar}/>
                <h5 className={styles.userName}>{userName}</h5>
                <h6 className={styles.userId}>@{id}</h6>
            </div>  
        </div>

        <div className={styles.AboutSection}>
      


        <div className={styles.bio}>

            
            <div className={styles.user}>
                <h4 className={styles.AboutText} >About user</h4>
                <hr className={styles.About}/>
                <h5>Username</h5>
                <input className={styles.input} type="text"
                 placeholder={userName}
                 onChange={(event)=>inputHandlerName(event)}/>
            </div>

             
            <div className={styles.bioDesc}>
                <h5>bio</h5>
                <input className={styles.input} type="text"
                    placeholder={bio}
                    onChange={(event)=>inputHandlerBio(event)}/>
            </div>

            <button onClick={sumbitHandler} >Save</button>

        </div>
        </div>
        </>
    );    
}

export default Profile;