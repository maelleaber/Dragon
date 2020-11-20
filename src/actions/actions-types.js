import { SET_DRAGON, ADD, DELETE, REVERSE, ELEMENT } from '../constants/actions';

export const set_dragon = payload => {

    return {
        type : SET_DRAGON, payload
    }
}

export const add_dragon = () => {

    return{
        type : ADD
    }
}


export const delete_dragon = payload => {

    return {
        type : DELETE, payload 
    }
}

export const reverse = () => {

    return {
        type : REVERSE
    }
}

export const element = payload => {

    return{
        type : ELEMENT, payload
    }
}