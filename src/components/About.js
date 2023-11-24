import React from 'react';
// import PropTypes from "prop-types";


export default function About(props) {
  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
    <div className="abouttext">
      <h2>About TextUtils</h2>
      <p>TextUtils is a Smart Online Text Editor that is made using React.Js. TextUtils provides various options to transform your text like convert the text to uppercase or lowercase, capitalise first letter of every word of the text or reverse the entered text and many more options. Keep exploring TextUtils and feel free to contribute</p>
      <p><a target='blank' href="https://github.com/satyam-mishra-07/text-utils.git">Contribute Here</a></p>
    </div>
    <div className="aboutCreator">
      <h2>About Creator</h2>
      <h3>Satyam Mishra</h3>
      <p>A B-Tech First Year College Student in Jalpaiguri Government Engineering College</p>
      <p><a target='blank' href="www.linkedin.com/in/satyam-mishra-53617518a">Linkedin</a></p>
      <p><a target='blank' href="https://www.instagram.com/satyam_mishra_88">Instagram</a></p>
    </div>
    </div>
    </>
  )
}
