import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Card from './components/Card'
import data from './data'

const App = () => {

  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        name = {item.name}
        img = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location = {item.location}
        title = {item.title}
        price = {item.price}
        openSpots ={item.openSpots}
        img2 ={item.img2}
        description = {item.description} 
      />
    )
  })

  return (
    <div className='container'>
        <NavBar />
        <Main />
        <section className='cards-list'>
        {cards}
        </section>
    </div>
  )
}
export default App
