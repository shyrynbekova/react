import { useGetFoodQuery } from "../api/post";
import RestaurantCard from "./RestaurantCard";

function RestaurantList() {
    const { data: restaurants, isLoading, error } = useGetFoodQuery()

    if(isLoading) {
        return (
            <p>Идет загрузка...</p>
        )
    }

    return (
            <div className="resturant-list">
                <h2>Our Favourite picks</h2>
            <div className="list-conteiner">
            {
                restaurants.map(restaurant => <RestaurantCard
                    key={restaurant.id}
                    name={restaurant.name}
                    categories={restaurant.categories}
                    photoUrl={restaurant.photoUrl}
                    rating={restaurant.rating}
                    specialty={restaurant.specialty}
                />)    
            }
            </div>
            </div>

     );
}
export default RestaurantList;
