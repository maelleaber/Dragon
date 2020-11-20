import { SET_DRAGON, ADD, DELETE, REVERSE } from '../constants/actions';

const stateInit = {
    dragons : ['Valk'],
    count : 1, 
    dragon : '', 
    message : '',

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

            if(state.dragons.filter(dragon => dragon === state.dragon)){

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
        
        default : 
            return state

    }

}

export default reducer;