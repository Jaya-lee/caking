import {combineReducers} from 'redux'
let showList=false

function listReducer (state=showList,action){
  switch(action.type){
    case 'TOP' : return !state
    default : return state
  }
}
let signUp=false
function signUpReducer (state=signUp,action){
  switch(action.type){
    case 'SHOWUP' : return true
    default : return false
  }
}
let signIn=false
function signInReducer (state=signIn,action){
  switch(action.type){
    case 'SHOWIN' : return true
    default : return false
  }
}

const rootReducer =combineReducers({
  popList:listReducer,
  signUp:signUpReducer,
  signIn:signInReducer
})
export default rootReducer
