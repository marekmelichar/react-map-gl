import React from 'react'

const ArrowIconLight = props => {
  return(
    <svg id="ArrowIconLight" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <style>
          {`
            #ArrowIconLight .a{fill:#f3f3f3;}
            #ArrowIconLight .a,
            #ArrowIconLight .c{fill-rule:evenodd;}
            #ArrowIconLight .b{fill:#ffd400;}
            #ArrowIconLight .c{fill:#ad9000;}
          `}
        </style>
      </defs>
      <g transform={`rotate(${props.rotation.current || 0}, 50, 50) translate(0 0)`}>
        <path className="a" d="M113.4,68.61A44.79,44.79,0,1,0,68.61,113.4,44.791,44.791,0,0,0,113.4,68.61Z" transform="translate(-18.61 -18.61)"/>
        <path className="b" d="M89.583,50A39.577,39.577,0,1,0,77.991,77.989,39.461,39.461,0,0,0,89.583,50ZM85.355,14.645A50,50,0,1,1,50,0,49.843,49.843,0,0,1,85.355,14.645Z" transform="translate(0 0)"/>
        <path className="c" d="M50,2.084A47.918,47.918,0,1,0,83.883,16.119,47.767,47.767,0,0,0,50,2.084ZM50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"/>
        <path className="c" d="M174.389,71.62l15.177,62.659-15.177-5.208-15.179,5.208Z" transform="translate(-124.389 -55.956)"/>
      </g>
    </svg>
  )
}

export default ArrowIconLight;


