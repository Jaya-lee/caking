import axios from 'axios'
// const searchShop =(key)=>(
//   dispatch =>{
//     const data={key}
//     axios.post('http://petapi.haoduoshipin.com/shop/search',data).then(res=>
//       dispatch({type:'SEARCH',shopList:res.data.shops})
//     )
//   }
// )
const allOrders = () =>(
  dispatch =>{
    axios.get('http://petapi.haoduoshipin.com/orders').then(res=>
    dispatch({type:'ALLORDERS',orders:res.data.orders}))
  }
)
export {allOrders}
