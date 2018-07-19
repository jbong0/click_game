import React, { Component } from 'react';
import './App.css';
import image1 from './images/mickey.png'
import image2 from './images/minnie.png'
import image3 from './images/donald.png'
import image4 from './images/daisy.png'
import image5 from './images/goofy.png'
import image6 from './images/pluto.png'
import logo from './images/logo.png'



var imageArray = [
  {
    id: 1,
    url: image1,
    hasBeenClicked: false
  },
  {
    id: 2,
    url: image2,
    hasBeenClicked: false
  },
  {
    id: 3,
    url: image3,
    hasBeenClicked: false
  },
  {
    id: 4,
    url: image4,
    hasBeenClicked: false
  },
  {
    id: 5,
    url: image5,
    hasBeenClicked: false
  },
  {
    id: 6,
    url: image6,
    hasBeenClicked: false
  }
]

class App extends Component {

  constructor(){
    super()
    this.state = {
      logoImage: logo,
      images: imageArray,
      score: 0,
      highScore: 0
    }
  }

  handleImageClick = (id) => {
    console.log(id)
    imageArray.sort(() => Math.random()-0.5)
    for (var i = 0; i < imageArray.length; i++) {
      if (imageArray[i].id === id){
        if (imageArray[i].hasBeenClicked === false){
          imageArray[i].hasBeenClicked = true
          console.log(imageArray[i])
          this.setState({
            message: "You are correct",
            score: this.state.score + 1
          })
          setTimeout(() => {
            this.setState({
              message: "Guess Again!"
            })
          }, 500)
        }
       else {
        console.log('You Lose');
        this.setState({
          message: "You are incorrect",
          score: 0
        })
        if (this.state.score > this.state.highScore){
          this.setState({
            highScore: this.state.score,
          })
        }
        
        for (var j = 0; j < imageArray.length; j++){
          imageArray[j].hasBeenClicked = false
        }
      }
    }
  }
}

  componentDidMount(){
    console.log('no interaction...just happens');
  }

  render() {

    var displayImages = this.state.images.map((eachItem, index) =>
      <img key={index} onClick={() => this.handleImageClick(eachItem.id)} src={eachItem.url} alt={eachItem.id} />
    )

    return (
      <div className="App">
        <div className="container">  
          <div className="header">
            <div className="instructions"> 
              Click on an image to earn points. <br />
              But don't click an image more than once.</div>
            <div><img className="logo" src={this.state.logoImage} alt="tsum tsum logo"/> <span className="clicky"><h1>Clicky Game</h1></span></div>
            <div className="scoreboard">  
              <span className="score"> Score:</span> <span className="count">   {this.state.score} </span> <br />
              <span className="score"> High Score:</span> <span className="count"> {this.state.highScore}  </span>
            </div>
          </div>
          <div className="images-container"> {displayImages} </div>
        </div>
      </div>
    )
  }
}

export default App