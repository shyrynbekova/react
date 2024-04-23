// import { useGetOrdersQuery, useGetOrdersQuery } from "../api/order.js";


// function OrdersPage() {
//     const { data, isLoading, error, isError} = useGetOrdersQuery()
      
//     if(isLoading) {
//         return (
//             <p>идеть загрузка...</p>
//         )
//     }
//     if(isError) {
//         return(
//             <p>Произошла ошибка: {error}</p>
//         )
//     }



//     return ( 
//         <div>
//             {
//                 data.map(order => {
//                     return (
//                         <p key={order.id}>{order.title}</p>
//                     )
//                 })
//             }
//         </div>

//      );
//         }

// export default OrdersPage;