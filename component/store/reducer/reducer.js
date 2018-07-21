import myActions from "../constant/constant";

const mainState= {
    signIn :'',
    signUp:'',
}

export default(state = mainState, action) =>{
    switch(action.type){

        case myActions.signUp:
        return({
            ...state,
            signUp: action.payload
        }) 
        case myActions.signIn:
        return({
            ...state,
            signIn: action.payload
        })
        
        default:
    }
    return state
}