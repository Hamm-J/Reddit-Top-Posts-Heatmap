import { useState, useEffect } from 'react';

const FirebaseAuth = () => {

  return (
    // TODO: replace the below placeholder component
    <div>
      <input type="text" placeholder='sign up: username'/>
      <input type="text" placeholder='sign up: password'/>
      <button>register</button>

      <br />

      <input type="text" placeholder='login: username'/>
      <input type="text" placeholder='login: password'/>
      <button>login</button>
    </div>
  )
}

export default FirebaseAuth;