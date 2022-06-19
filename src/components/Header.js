import React from 'react';

export default function Header(props) {
  return (
    <header style={{backgroundColor:"lightblue"}} className="block row center">
      <div>
        <a href="#/">
          <h1 style={{color:"black"}}>Geek's Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}
