import RestaurantCard from "./RestaurantCard";
function ResraurantList() {
    const { data: restaurants, isLoading, error } = useGetFoodQuery()

    if(isLoading) {
        return (
            <p>Идет загрузка...</p>
        )
    }

    return (
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

     );
}

export default ResraurantList;