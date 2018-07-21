import myActions from '../constant/constant';


export function signUp(result){
    return dispatch  =>  {
        dispatch({
            type: myActions.signUp,
            payload : result
        });
      }
   }

   export function signIn(result){
    return dispatch  =>  {
        dispatch({
            type: myActions.signIn,
            payload : result
        });
      }
   }