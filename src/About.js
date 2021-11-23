import React from 'react';
import './App.css';

function About() {
  return (
    <div className="textContainer">
      <h1>About.js</h1>
      <p>I've learned that the react Router was pretty easy to implement and that it allows page transition without reloading the page.</p>
      <p>A problem I encountered during this exercise was the version of React Router I was using, which I learned large changes were made making some of the code I used produce errors.</p>
      <p>In an earlier version we use "Switch" as a parent to multiple "Route" components, and we use "component" as a prop name to declare path component variable</p>
      <p>In the new version, I had to replace "Switch", with "Routes", "component" to "elements", and element prop values to JSX component syntax.</p>
    </div>  
  );
}

export default About;