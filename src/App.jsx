import { useReducer, useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import OrderModal from './components/OrderModal';
import orderReducer from './reducer/useOrder';
import HeaderLogo from './components/HeaderLogo';

function App() {
  <HeaderLogo/>
  const supabase = createClient("https://vbjvlbaapwbzhpmjtnkr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZianZsYmFhcHdiemhwbWp0bmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTcwMjcsImV4cCI6MjAyNjMzMzAyN30.MnNuDljYgITjt5m35rgIq2Qi81RyBroSzUZkwAl8jSA");
  const [orders, dispatch] = useReducer(orderReducer, []);

  async function getFood() {
    try {
      const data = await supabase.from("restaurants").select(`
      food (id, name, price, description)
      `).eq('id', 2)

      data.data[0].food.map(dish => {
        dish.sum = 0;
        dish.quantity = 0;
      })
      dispatch({
        type: "set-data",
        data: data.data[0].food
      })
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getFood();
  }, [])

  // const list = food.map(dish => {
  //   return (
  //     <OrderModal key={dish.id} />
  //   )
  // })

  function handleIncrease(product) {
    dispatch({
      type: 'increase',
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
    })
  }


  return (
    <div>
      {
        orders.map(dish => {
          return (
            <OrderModal
              key={dish.id}
              name={dish.name}
              price={dish.price}
              description={dish.description}
              quantity={dish.quantity}
              sum={dish.sum}
              onIncrease={() => handleIncrease(dish)}
              onDecrease={() => dispatch({
                type: 'decrease'
              })}
            />
          )
        })
      }
    </div>
  )
}

export default App

