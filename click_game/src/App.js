import React, { Component } from 'react';
import './App.css';
import image1 from './images/cloud.png'
import image2 from './images/placeholder.png'
import image3 from './images/search.png'

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
]

class App extends Component {

  constructor(){
    super()
    this.state = {
      message: "Click any image to begin",
      images: imageArray,
    }
  }

  handleImageClick = (id) => {
    console.log(id);
    for (var i = 0; i < imageArray.length; i++) {
      if (imageArray[i].id === id){
        console.log(imageArray[i]);
        imageArray[i].hasBeenClicked = true
      } else {
        console.log('your beat');
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
        <div className="header">
          <div>Clicky Game</div>
          <div>{this.state.message}</div>
          <div>Score</div>
        </div>
        {displayImages}
      </div>
    );
  }
}

export default App;