import {CONSTANTS } from '../actions';


const initialState = null;
let newState;

const board = (state=initialState,action)=> {
    switch (action.type){

        case CONSTANTS.BOARDS:
        
            return {...state, Boards:action.payload}
           
        case CONSTANTS.CREATE_TEAM:
        
            return {...state}
           

        case CONSTANTS.STAR_BOARDS:
        
            newState ={...state};
            let starred={};
            let personal=[];
            let index=null;

            newState.Boards.personal_boards.map(
                board=>{
                    if(board.id === action.payload.id){
                        if(!board.starred){
                            starred["desc"]=board.desc;
                            starred["id"]=board.id;
                            starred["is_closed"]=board.is_closed;
                            starred["starred"]=true;
                            starred["name"]=board.name;
                            console.log("card starred")
                            board.starred=true;
                        }
                        else
                          board.starred = false;
                    }
                }
            )
            newState.Boards.starred_boards.map((
                board,index)=>{ console.log(index)
                    if(board.id === action.payload.id){
                        board.starred = false;
                       // personal.push({desc:board.desc,id:board.id,is_closed:board.is_closed,starred:true})
                        index=index;
                        console.log('start to unstared',index)
                        newState.Boards.starred_boards.splice(index,1)
                    }
                }
            )

           

            


            newState.Boards.team_baords.map(
                board=>{
                    if(board.id === action.payload.id){
                        board.starred = !board.starred;
                    }
                }
            )

            if(Object.keys(starred).length!==0)
                {newState.Boards.starred_boards.push(starred) 
                 console.log('wtf')}

            starred={};
            index=null;
            return {...newState}
        
        case CONSTANTS.ERROR:
        
            return {...state, redirect:action.payload}
        

        default:
            
            return state;
    }
};

export default board;