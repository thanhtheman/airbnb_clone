import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Card from './components/Card'
import littlestar from './images/littlestar.png'
import toronto from './images/toronto.png'
import montreal from './images/montreal.png'
import ottawa from './images/ottawa.png'
import vancouver from './images/vancouver.png'


const App = () => {
  
  return (
    <div className='container'>
        <NavBar />
        <Main />
        <Card 
          img1 = {toronto}
          img2 = {littlestar}
          rating = '5.0'
          reviewCount = '1,256'
          country ='Canada'
          title = 'The most epic city of Canada'
          price ='188'
        />
        <Card 
          img1 = {montreal}
          img2 = {littlestar}
          rating = '4.5'
          reviewCount = '856'
          country ='Canada'
          title = 'The city with French elegant design and modern touch'
          price ='168'
        />
        <Card 
          img1 = {ottawa}
          img2 = {littlestar}
          rating = '3.5'
          reviewCount = '356'
          country ='Canada'
          title = 'The capital city of Canada'
          price ='118'
        />
        <Card 
          img1 = {vancouver}
          img2 = {littlestar}
          rating = '4.0'
          reviewCount = '256'
          country ='Canada'
          title = 'The rainy romantic city with amazing culinary art'
          price ='218'
        />
    </div>
  )
}
export default App