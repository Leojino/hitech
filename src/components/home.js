import React, { Component } from "react";

import Header from './Header.js';
import '../css/Home.css'
import tileData from './tileData';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" key={21}>
            <img className="d-block w-100" src="../images/1.jpeg" alt="First slide"/>
          </div>
          <div className="carousel-item" key={23}>
            <img className="d-block w-100" src="../images/3.jpeg" alt="Third slide"/>
          </div>
        </div>
      </div>

        {/* <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4"/>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div> */}

        <div className="container">
          <div className="row">
          {tileData.map(value => (
                <div key={value.code} className="col-xs-12 col-sm-6 col-md-4" style={{marginBottom: "20px"}}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{value.name}</h5>
                      <p className="card-text">{value.range}</p>
                    </div>
                  </div>
                </div>
              )
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
