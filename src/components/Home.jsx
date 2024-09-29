import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import pizzas from './pizzas'


const Home = () => {

  return (
    <div >
      <div>
        <Header/> 
      </div>


        <div className='grilla'>
        
           {pizzas.map((pizza,index) => <CardPizza  pizza ={pizza} key={index}/>)}

        </div>
    </div>
  )
}

export default Home;