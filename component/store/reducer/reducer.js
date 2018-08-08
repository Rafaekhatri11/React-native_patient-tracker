import myActions from "../constant/constant";

const mainState= {
    signIn :'',
    signUp:'',
    loaderforsignup : false ,
    loaderforsignin : false,
    doctorpageforid: '',
    senddata : '',
    patients : [],
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
        
        case myActions.doctorpageforid:
        return({
            ...state,
            doctorpageforid: action.payload
        })

        case myActions.senddata:
        return({
            ...state,
            senddata: action.payload
        })

        case myActions.patients:
        return({
            ...state,
            patients: action.payload
        })

        case myActions.loaderforsignin:
        return({
            ...state,
            loaderforsignin : action.payload
        })

        case myActions.loaderforsignup:
        return({
            ...state,
            loaderforsignup : action.payload
        })


        default:
    }
    return state
}