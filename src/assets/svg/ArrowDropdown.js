import React from 'react'

const ArrowDropdown = props => {
  return(
    <svg id="arrowdropdown" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
      <defs>
      <style>
        {`
          #arrowdropdown .a{fill:none;}
          #arrowdropdown .b{fill:#fff;}

          #arrowdropdown .closed{
            transform: rotate(0deg);
            transform-origin: center;
          }

          #arrowdropdown .open{
            transform: rotate(180deg);
            transform-origin: center;
          }
        `}
      </style>
      </defs>
      <g className={props.closed ? 'closed' : 'open'}>
      <path className="a" d="M0,0H96V96H0Z"/>
      <path className="b" d="M9.6,16.84,19.959,27.2a3.983,3.983,0,0,0,5.64,0l10.36-10.36A4.012,4.012,0,0,0,33.119,10H12.4A4,4,0,0,0,9.6,16.84Z" transform="translate(25.241 30)"/>
      </g>
    </svg>
  )
}

export default ArrowDropdown;