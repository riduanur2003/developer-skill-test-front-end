import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8ab9ce661f671bb8d7e7e29b283f7594&tags=cats&extras=description&per_page=12&page=2&format=json&nojsoncallback=1"
    )
      .then(function (response) {
        return response.json();
      })
      .then(
        function (j) {
          let picArray = j.photos.photo.map((pic) => {
            var srcPath =
              "https://live.staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              "_q.jpg";
            return (
              <div className="App-intro">
                <a href={srcPath}>
                  <img alt="dogs" src={srcPath}></img>
                  <h4>{pic.title}</h4>
                </a>
              </div>
            );
          });
          this.setState({ pictures: picArray });
        }.bind(this)
      );
  }

  render() {
    return (
      <div className="App">
        <section className="App-intr">{this.state.pictures}</section>
      </div>
    );
  }
}

export default App;
