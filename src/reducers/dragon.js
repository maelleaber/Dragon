import { SET_DRAGON, ADD, DELETE, REVERSE, ELEMENT } from '../constants/actions';

const stateInit = {
    dragons : [],
    count : 0, 
    dragon : '', 
    message : '',
    element : 'Fire',

}

let reducer = (state = stateInit, action = {}) => {

    switch(action.type){

        case SET_DRAGON : 
            const {name, value} = action.payload
            return {
                ...state, 
                [name] : value
            }

        case ADD : 

            if (state.dragon === ''){

                return {
                    ...state, 
                    message : "Le champs de saisie est vide",
                }
            }

            if(state.dragons.some(dragon => dragon === state.dragon)){

                return {
                    ...state, 
                    message : "Ce dragon est déjà dans la liste"
                }
            }

            return {
                ...state, 
                dragons : [...state.dragons, state.dragon], 
                message : 'Votre dragon a bien été ajouté', 
                count : state.count + 1, 
                dragon : ''
            }
        
        case REVERSE : 
            state.dragons.reverse(); 

            return {
                ...state,
                dragons : [...state.dragons]
            }

        case DELETE : 

            const remaining_dragons = state.dragons.filter(dragon => dragon !== action.payload)

            return {
                ...state, 
                dragons : remaining_dragons,
                count : state.count - 1,
            }

        case ELEMENT : 

            const {element, elem} = action.payload

            return {
                ...state, 
                [element]: elem
            }
        
        default : 
            return state

    }

}

export default reducer;