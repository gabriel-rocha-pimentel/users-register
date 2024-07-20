//React Config
import React from 'react'

//Styles
import './button.scss';

function Button({id, texto, tag, func}) {
  return (
    <button onClick={func} type='button' id={id}>{texto}{tag && <span>{tag}</span>}</button>
  )
}

export default Button;