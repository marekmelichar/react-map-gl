import React from 'react'

const ArrowIconDark = props => {
  return(
    <svg id="ArrowIconDark" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <style>
          {`
            #ArrowIconDark .a{fill:#181818;}
            #ArrowIconDark .a,
            #ArrowIconDark .c{fill-rule:evenodd;}
            #ArrowIconDark .b,
            #ArrowIconDark .c{fill:#ffd400;}
          `}
        </style>
      </defs>
      <g transform={`rotate(${props.rotation.current || 0}, 50, 50) translate(0 0)`}>
        <path className="a" d="M113.4,68.61A44.79,44.79,0,1,0,68.61,113.4,44.791,44.791,0,0,0,113.4,68.61Z" transform="translate(-18.61 -18.61)"/>
        <path className="b" d="M89.583,50A39.577,39.577,0,1,0,77.991,77.989,39.461,39.461,0,0,0,89.583,50ZM85.355,14.645A50,50,0,1,1,50,0,49.843,49.843,0,0,1,85.355,14.645Z" transform="translate(0 0)"/>
        <path className="c" d="M174.389,71.62l15.176,62.659-15.176-5.208-15.179,5.208Z" transform="translate(-124.389 -55.956)"/>
      </g>
    </svg>
  )
}

export default ArrowIconDark;


