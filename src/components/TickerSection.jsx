import BaseButton from "./BaseButton";
import TickerCard from "./TickerCard";

function TickerSection() {
    const { data: restaurants, isLoading, error } = useGetFoodQuery()

    if(isLoading){
        return (
            <p>загрузка</p>

        )
    }


    return ( 
        <section className='ticker'>
            <div>
        <h2>Award winning
            The best restaurants near you!</h2>
            <BaseButton>Explore the best restaurants</BaseButton>
            </div>
            <div>
                {
                    restaurants.data.map(restaurant => <TickerCard key={restaurant.name}
                        photoUrl={restaurant.photoUrl} name ={restaurant.name} />)
                }
                

            </div>
        </section>
     );
}

export default TickerSection;