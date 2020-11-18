import {CONSTANTS} from '../actions';
import AuthService from '../ApiServices/services';



export const Boards = (response)=> {

    return {
        type:CONSTANTS.BOARDS,
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
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }
}
