const showList =()=>(
  dispatch =>{
    dispatch({type:'TOP'})
  }
)
const showSignUp =()=>(
  dispatch =>{
    dispatch({type:'SHOWUP'})
  }
)
const showSignIn =()=>(
  dispatch =>{
    dispatch({type:'SHOWIN'})
  }
)


export {showList,showSignUp,showSignIn}
