import {CONSTANTS } from '../actions';


let listId = 2;
let cardId =4;

const initialState = [
    {
        title : "To do",
        id: 0,
        cards: [
            {
                id:1,
                text: " yes this is a text, and I hope it works fine"
            },
            {
                id:2,
                text: " yes this is a text, and I hope it works fine"
            },
            
        ]
    },
    {
        title : "Doing",
        id: 1,
        cards: [
            {
                id:1,
                text: " wow, redux was actually not that bad"
            },
            {
                id:2,
                text: "i know right!"
            },
            
        ]
    },

]


const listReducers = (state=initialState,action)=> {
    switch (action.type){

        case CONSTANTS.ADD_LIST:
        
            const newList = {
                title: action.payload,
                cards:[],
                id: listId,

            }
            listId +=1;
            return [...state,newList]

        case CONSTANTS.ADD_CARD:
            console.log(action.payload.listId);
            const newCard = {
                text:action.payload.text,
                id:cardId,
            };
            
            cardId+=1;

            const newState = state.map(list=> {
                if(list.id === action.payload.listId){
                    return {...list,cards:[...list.cards,newCard]}
                }
                else return list;
            });

            return newState;
           


        default:
            
            return state;
    }
};

export default listReducers;