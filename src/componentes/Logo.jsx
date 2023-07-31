import React from "react";
import logo from '../logo.svg';

export function Logo(props) {
    return(
        <div className={props.nombreClase}>
        <img
          className='img-logo'
          src={logo}
          alt='Logo React' />
      </div>
    );
}