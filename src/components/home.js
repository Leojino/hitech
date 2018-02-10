import React, { Component } from "react";

import Header from './Header.js';
import '../css/Home.css'
import tileData from './tileData';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <div className="container">
          <div className="row">
          {tileData.map(value => (
                <div key={value.code} className="col-xs-12 col-sm-6 col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{value.name}</h5>
                      <p className="card-text">Some</p>
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
