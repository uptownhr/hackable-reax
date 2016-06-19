import React, { Component } from 'react';
import { Grid, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import './home.css'
import kube from './kube.svg'

const Fold = function (props) {
  return (
    <div>
      <Jumbotron>
        <img src={kube} style={{width: '150px'}}/>
        <h1>{props.name}</h1>
        <p>Universal React Express middleware package. A universal react dev environment provided through npm install</p>
      </Jumbotron>
      <pre>
{`
npm install --save-dev kube

// /index.js
const express = require('express');
const app = express()

/*
Loads middleware and provides
1. the webpack dev server
2. the webpack hot moldule reloader
3. res.reax.render
*/
require('kube')(app)

app.get('/', function(req,res){
  let state = { ssr: 'server state' }
  res.kube.render(state)
})

`}
      </pre>
    </div>)
}

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="fullpage">
        <Fold name={this.props.location.state.name}/>
      </div>
    );
  }
}
