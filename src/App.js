import React, { Component } from 'react';
import './style/App.css'
import { Col, Row, Container } from 'react-bootstrap';

class App extends Component {

  constructor() {
    super();
    this.state = {
      minutes: 30,
      seconds: 0
    }
  }

  sTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
  }

  rTimer = () => {
    this.setState({
      minutes: 30,
      seconds: 0
    });
  }

  convertToSeconds = (minutes, seconds) => {
    return seconds + (minutes * 60);
  }

  countDown = () => {
    const { minutes, seconds } = this.state;
    let secondsTotal = this.convertToSeconds(minutes, seconds);
    if (secondsTotal) {
      seconds ? this.setState({ seconds: seconds - 1 }) : this.setState({ seconds: 59 });
      if (secondsTotal % 60 === 0 && minutes) {
        this.setState({ minutes: minutes - 1 });
      }
    } else {
      alert("Break Time!")
      clearInterval(this.timer);
    }
  }



  render() {
    const { minutes, seconds } = this.state
    return (
      <Container className="full" fluid>
        <Row>
          <Col>
            <h1>||</h1>
            <p className="clockText">{minutes}:{seconds} </p>
            <div className="buttonPos">
              <button onClick={this.sTimer} className="buttons">start</button>
              <button onClick={this.rTimer} className="buttons">reset</button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
