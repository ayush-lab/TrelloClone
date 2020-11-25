import {CONSTANTS } from '../actions';


let listId =1;
let cardId =4;
let id=10000; 

const initialState = null;
let newState;

const listReducers = (state=initialState,action)=> {

    switch (action.type){

        case CONSTANTS.ADD_LIST:
        
            const newList = {
                
                name: action.payload,
                cards:[],
                id: listId,

            }
            listId +=1;
            newState = {...state};

            
            newState.list.lists.push(newList);

            return {...newState};
            break;
        


        case CONSTANTS.ADD_CARD:
            
            const newCard = {
                name:action.payload.text,
                id:cardId,
                desc:"",
            };
            
            cardId+=1;

            
            newState = {...state};

            newState.list.lists.map(list=> {
                if(list.id === action.payload.listId){
                    list.cards.push(newCard);
                    console.log(list)
            }})

            
            return {...newState}
            break;
        
            case CONSTANTS.ADD_CARD_DESC:
            
            
                
                newState = {...state};
                 console.log(action.payload.cardId, action.payload.listId)
    
                newState.list.lists.map(list=> {
                    if(list.id === action.payload.listId){
                        
                        list.cards.map(card=>{
                            if(card.id === action.payload.cardId){
                                card.desc=action.payload.text;
                               
                            }
                        })
                }})
    
                console.log("====>",newState)
                return {...newState}
                break;
            
            case CONSTANTS.EDIT_CARD_NAME:{
            
            
                
                newState = {...state};
                 console.log(action.payload.cardId, action.payload.listId)
    
                newState.list.lists.map(list=> {
                    if(list.id === action.payload.listId){
                        
                        list.cards.map(card=>{
                            if(card.id === action.payload.cardId){
                                card.name=action.payload.text;
                               
                            }
                        })
                }})
    
                console.log("====>",newState)
                return {...newState}
                break;
                
            }

            case CONSTANTS.EDIT_CARD_DUEDATE:{
            
            
                
                newState = {...state};
                 console.log(action.payload.cardId, action.payload.listId)
    
                newState.list.lists.map(list=> {
                    if(list.id === action.payload.listId){
                        
                        list.cards.map(card=>{
                            if(card.id === action.payload.cardId){
                                card.due_date=action.payload.text;
                               
                            }
                        })
                }})
    
                console.log("====>",newState)
                return {...newState}
                break;
                
            }
        

        case CONSTANTS.SET_CARD_LIST:
          
            return {...state, list:action.payload}
            break;
        
        
        case CONSTANTS.DRAGGED_ITEM:{

            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } = action.payload;

            const newState = {...state};

            if(droppableIdStart ===droppableIdEnd){

                newState.list.lists.map(list => {
   
                    if(droppableIdStart ==list.id){
                        const card = list.cards.splice(droppableIndexStart,1);
                        list.cards.splice(droppableIndexEnd,0,...card);
                    }});

         
            }

            if(droppableIdStart!==droppableIdEnd){
                
                const listStart =newState.list.lists.find(list=> droppableIdStart == list.id);

                const card =listStart.cards.splice(droppableIndexStart,1);

                const listEnd = newState.list.lists.find(list => droppableIdEnd == list.id);
                console.log(droppableIndexEnd)
                listEnd.cards.splice(droppableIndexEnd,0,...card);
            }



            return {...newState};
            break;
        }


        case CONSTANTS.ADD_MEMBERS_LIST:{

            newState= {...state}
            let member={};
            let length=action.payload['members'].length-1;         
            console.log(length)
            member["name"]=action.payload["members"][length];
            member["id"]=id;
            id+=1;

            newState.list.members.push(member)
        

        

            return {...newState}
            break;
        }   

        case CONSTANTS.REMOVE_MEMBERS_LIST:{

            newState= {...state}
            let index;
            
           
            newState.list.members.map((member,index)=>{

                if(member.id ===action.payload["members"]){
                    index=index;
                }
            });
            
            if(index!==null)
            newState.list.members.splice(index,1);
        

            return {...newState}
            break;
        }                    


        case CONSTANTS.ADD_MEMBERS_CARD:{

           
            newState= {...state}
            let member={};
            let length = action.payload['members'].length();
            member["name"]=action.payload["members"][length-1];
            member["id"]=id;
            id+=1;

            newState.list.members.push(member)
        

        

            return {...newState}
            break;
        }     

        default:
            
            return state;
    }


};

export default listReducers;