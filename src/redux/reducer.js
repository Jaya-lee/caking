import {combineReducers} from 'redux'

//登录
function signInReducer (state=false,action){
  switch(action.type){
    case 'SIGNIN' : return true
    default : return state
  }
}
//注册
function signUpReducer (state=false,action){
  switch(action.type){
    case 'SIGNUP' : return true
    default : return state
  }
}
//本地存储登录状态
function userReducer(state='',action){
  switch (action.type) {
    case 'USER':
      return action.user
    default:
      return state
  }
}

//商铺信息

function shopReducer (state=[],action){
  switch(action.type){
    case 'ALL' : return action.shopList
    case 'SEARCH': return action.shopList
    default : return state
  }
}

const rootReducer =combineReducers({
  shopList:shopReducer,
  signin:signInReducer,
  signup:signUpReducer,
  user:userReducer
})
export default rootReducer
