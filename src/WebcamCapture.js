import React, { Component } from 'react';
import Webcam from "react-webcam";

class WebcamCapture extends Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc)
    fetch('/v1/face', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
          "Content-Type": "text/plain; charset=UTF-8",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: imageSrc, // body data type must match "Content-Type" header
    })
    .then(d => {
      console.log(d)
      return d.json()
    })
    .then(d => {
      console.log(d)
    })
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}

export default WebcamCapture
