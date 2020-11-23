import {CONSTANTS} from '../actions';
import AuthService from '../ApiServices/services';
import {Redirect} from 'react-router-dom';


export const Boards = (response)=> {

    return {
        type:CONSTANTS.BOARDS,
        payload:response,
        
    }
};

export const StarringBoards = (response,id)=> {

    return {
        type:CONSTANTS.STAR_BOARDS,
        payload:{response,id},
        
    }
};

export const Error = (response)=> {

    return {
        type:CONSTANTS.ERROR,
        payload:response,
        
    }
};

export const CreateTeam = (response)=> {

    return {
        type:CONSTANTS.CREATE_TEAM,
        payload:response,
        
    }
};



export const AsynBoards = ()=> {
    
    return dispatch => {

        AuthService.Boards()
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
               
                dispatch(Boards(response.data));
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            if(error.response.request.statusText ==="Unauthorized"){
                dispatch(Error("/login"));
            }
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }
}


export const AsynStarringBoard = (id)=> {
    
    return dispatch => {
        let form ={};
        form['card']='star';
        console.log(id,form)

        AuthService.StarringBoards(id,form)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
               
                dispatch(StarringBoards(response.data,id));
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }
}



export const AsynCreateTeam = (data)=> {
    
    return dispatch => {

        AuthService.CreateTeam(data)
        .then(response => {console.log('Response:', response) 
            
        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
              
                dispatch(CreateTeam(`/team/${response.data.id}/`));
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            if(error.response.request.statusText ==="Unauthorized"){
                dispatch(Error("/login"));
            }
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }
}
