import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionType";

const initialState = {
    loading: true,
    userlist: [],
    userObj: {},
    errmessge: ''
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessge: action.payload,
            }
        case GET_USER_LIST:
            return {
                loading: false,
                errmessge: '',
                userlist: action.payload,
                userObj: {}
            }
        case DELETE_USER:
            return {
                ...state,
                loading: false
            }
        case ADD_USER:
            return {
                ...state,
                loading: false
            }
        case UPDATE_USER:
            return{
                ...state,
                loading: false
            }
            case GET_USER_OBJ:
                return{
                    ...state,
                    userObj: action.payload
                }
        default: return state


    }
}
