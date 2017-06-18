import {combineReducers} from 'redux'

//读取用户
function userReducer(state='',action){
  switch (action.type) {
    case 'USER': return action.user
    default: return state
  }
}
//github头像
function picReducer(state='',action){
  switch (action.type) {
    case 'GITHUB_PIC': return action.pic
    default : return state
  }
}

//header标题
function titleReducer(state='',action){
  switch (action.type) {
    case 'CHANGETITLE': return action.title
    default : return state
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
  user:userReducer,
  title:titleReducer,
  pic:picReducer
})
export default rootReducer
