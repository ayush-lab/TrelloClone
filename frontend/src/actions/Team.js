import {CONSTANTS} from '../actions';
import AuthService from '../ApiServices/services';
import {Redirect} from 'react-router-dom';


export const ViewTeam = (response)=> {

    return {
        type:CONSTANTS.VIEW_TEAM,
        payload:response,
        
    }
};


export const removeMembersTeam = (data)=> {
    return {
        type:CONSTANTS.REMOVE_MEMBERS_TEAM,
        payload:data,
    }
}




export const AsynViewTeam = ()=> {
    
    return dispatch => {

        AuthService.ViewTeam()
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
               
                dispatch(ViewTeam(response.data));
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            // if(error.response.request.statusText ==="Unauthorized"){
            //     dispatch(Error("/login"));
            // }
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }
}



export const addMembersTeam= (data)=> {
    return {
        type:CONSTANTS.ADD_MEMBERS_TEAM,
        payload:data,
    }
};

export const AsynaddMemberTeam = (TeamId,formData)=> {
    
    return dispatch => {

        AuthService.AddMembersTeam(TeamId,formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
             
                dispatch(addMembersTeam(formData));
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })

     }
}





export const AsynRemoveMemberTeam = (TeamId,formData)=> {
    
    return dispatch => {

        AuthService.RemoveTeamMembers(TeamId,formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
             
                dispatch(removeMembersTeam(formData));
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })

     }
}