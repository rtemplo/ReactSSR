import React from 'react'

const Home = () => {
  return (
    <div>
      <div>I'm the a very BEST home component!</div>
      <button onClick={() => console.log("Ouch! you clicked me!")}>Press Me!</button>
    </div>
  )
};

export default Home;