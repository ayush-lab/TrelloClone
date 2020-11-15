import {CONSTANTS} from '../actions';
import AuthService from '../ApiServices/services';

export const addList = (data)=> {
    return {
        type:CONSTANTS.ADD_LIST,
        payload:data,
    }
};


export const AsynAddNewList = (BoardId,formData,text)=> {
    
    return dispatch => {

        AuthService.BoardList(BoardId,formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
             
                dispatch(addList(text));
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })

    }
}