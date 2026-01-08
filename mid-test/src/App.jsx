import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mainPic from './assets/main-pic.jpg'

import CardList from './components/card/cardList'
import Banner from './components/banner/banner'
import { filmData } from './data'

function App() {
  const [selectedItem, setSelectedItem] = useState(filmData[0]);

  return (
    <div className="background">
      <div className="header">
        <h1>Anonime</h1>
        <h3>Home</h3>
        <h3>List anime</h3>
        <div className="searchbar">
          <input type="text" placeholder='search anime or movie'/>
        </div>
      </div>
      <div className="content-text">
        <h1>Explore</h1>
        <h3>What are you gonna watch today ?</h3>
      </div>
      <div className="img-box">
        <img src= {mainPic} />
        <div className="img-text">
        {selectedItem && (
        <Banner
          title={selectedItem.movieName}
          content={selectedItem.description}
        />
        )}
      </div>
      </div>
        <h1 className='New_release'>New Release</h1>
        <CardList
          data={filmData}
          onSelect={setSelectedItem}
        />
    </div>
  )
}

export default App
