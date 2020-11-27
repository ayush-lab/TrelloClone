import {CONSTANTS } from '../actions';


const initialState = null;
let newState;
let id=100;

const Team = (state=initialState,action)=> {


    switch (action.type){

        case CONSTANTS.CREATE_TEAM:

            return {...state,redirect:action.payload}
            break;
        
        case CONSTANTS.VIEW_TEAM:
        
            return {...state, Team:action.payload, redirect:null}
            break;

        case CONSTANTS.ADD_MEMBERS_TEAM:{

            newState= {...state}
            let member={};
            let length=action.payload['members'].length-1;         
            //console.log(length)
            member["name"]=action.payload["members"][length];
            member["id"]=id;
            id+=1;

            newState.list.members.push(member)
        

        

            return {...newState}
            break;
        } 

        case CONSTANTS.REMOVE_MEMBERS_TEAM:{

            newState= {...state}
            
            let index;
            
           
            newState.Team.members.map((member,index)=>{

                if(member.id ===action.payload["user"]){
                    index=index;
                }
            });
            
            if(index!==null)
            newState.Team.members.splice(index,1);
        
            console.log(newState)
            return {...newState}
            
            break;
        }   

        default:
            
            return state;
    }
};

export default Team;