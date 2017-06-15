import {combineReducers} from 'redux'
//弹窗pop
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
//商铺信息
let shops=[]
function shopReducer (state=shops,action){
  switch(action.type){
    case 'ALL' : return action.shopList
    case 'SEARCH': return action.shopList
    default : return state
  }
}

const rootReducer =combineReducers({
  popList:listReducer,
  signUp:signUpReducer,
  signIn:signInReducer,
  shopList:shopReducer
})
export default rootReducer
