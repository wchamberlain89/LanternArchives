import React from 'react';

function Landing () {
  return (
    <div>
      <form>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
      <form>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <input type="text" placeholder="Confirm Password"/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Landing;
