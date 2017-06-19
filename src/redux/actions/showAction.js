import axios from 'axios'

const signIn =(data,push)=>(
  dispatch =>{
    axios.post('http://petapi.haoduoshipin.com/user/signin',data)
    .then( res =>{
      dispatch({type:'USER',user:data.username})
      localStorage.userid = JSON.stringify([res.data.userId])
      push('/mine')
    })
    .catch( err=> alert('密码错误，请核对后重试'))
  }
)

const signUp =(data,push)=>(
  dispatch =>{
    axios.post('http://petapi.haoduoshipin.com/user/signup',data)
    .then( res =>{
      dispatch({type:'USER',user:data.username})
      localStorage.userid = JSON.stringify([res.data.userId])
      push('/mine')
    })
    .catch(err => alert('用户名重复，请重新注册'))
  }
)


export {signIn,signUp}
