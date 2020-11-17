import {CONSTANTS } from '../actions';


let listId = 2;
let cardId =4;

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
            
            

        

        case CONSTANTS.SET_CARD_LIST:
          
            return {...state, list:action.payload}
            break;
            

        default:
            
            return state;
    }
};

export default listReducers;