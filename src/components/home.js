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
          {[1,2,3,4,5].map( value => 
            <div className={"carousel-item "+ (value===1?" active":"false") }  key={value}>
              <img className="d-block w-100" src={"../images/"+ value +".jpeg"} alt="First slide"/>
            </div>
          )}
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
          <h2 style={{marginBottom: 20}}>Our Products</h2>
          <div className="row">
          {tileData.map(value => (
                <div key={value.code} className="col-xs-12 col-sm-12 col-md-12" style={{marginBottom: "20px"}}>
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
