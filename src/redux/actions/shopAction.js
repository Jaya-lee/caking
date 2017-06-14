import axios from 'axios'
const searchShop =(key)=>(
  dispatch =>{
    const data={key}
    axios.post('http://petapi.haoduoshipin.com/shop/search',data).then(res=>
      dispatch({type:'SEARCH',shopList:res.data.shops})
    )
  }
)
const allShop = () =>(
  dispatch =>{
    axios.get('http://petapi.haoduoshipin.com/shops').then(res=>
    dispatch({type:'ALL',shopList:res.data.shops}))
  }
)
export {searchShop,allShop}
