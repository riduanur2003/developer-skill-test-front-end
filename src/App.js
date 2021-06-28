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
      "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8ab9ce661f671bb8d7e7e29b283f7594&tags=nyc&extras=description&per_page=12&page=2&format=json&nojsoncallback=1"
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
              ".jpg";
            return (
              <div className="App-intro">
                <div className="card-containter">
                  <a href={srcPath}>
                    <img className="image" alt="dogs" src={srcPath}></img>
                  </a>
                  <div className="card-header"> {pic.title}</div>

                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque elementum ultrices pellentesque. Aliquam congue
                    metus.
                  </div>
                  <div className="card-footer">
                    <button className="buttonStyle" type="button ">
                      Explore
                    </button>
                  </div>
                </div>
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
