function orderReducer(orders, action) {
    switch (action.type) {
        case "increase":
            return orders.map(order => {
                console.log(orders)
                if (order.id === action.id) {
                    order.quantity = action.quantity + 1;
                }
                return order;
            })

        case "decrease":
            console.log("decrease quantity");
            break;
            // return orders.map(order => {
            // //     console.log("decrease quantity");
            // //     if (order.id ===action.id) {
            // //         order.quantity = action.quantity - 1;
                    
            //     }
                 



            // }) 
            // break;
            
           

        case "set-data":
            return action.data.map(product => {
                product.sum = 0;
                product.quantity = 0;
                return product;
            })
        default:
            throw new Error("Непонятное событие")
    }
}

export default orderReducer;