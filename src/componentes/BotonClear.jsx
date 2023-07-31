import React from "react";
import '../stylesheets/BotonClear.css'

export const BotonClrear = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);