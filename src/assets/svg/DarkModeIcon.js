import React from 'react'

const DarkModeIcon = props => {
  return (
    <svg id="darkModeIcon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <defs>
        <style>
          {`
            #darkModeIcon .a{fill:none;}

            #darkModeIcon .b{fill:#3dbff0;}
          `}
        </style>
      </defs>
      <g transform="translate(0)">
        <path className="a" d="M0,0H64V64H0Z"/>
        <path className="b" d="M38.363,24.32A26.811,26.811,0,0,0,12.176,2a26.04,26.04,0,0,0-3.84.267,1.346,1.346,0,0,0-.373,2.56,26.584,26.584,0,0,1,14.747,23.84A26.655,26.655,0,0,1,7.963,52.533a1.35,1.35,0,0,0,.373,2.56,30.3,30.3,0,0,0,3.84.24,26.811,26.811,0,0,0,26.187-22.32,26.663,26.663,0,0,0,.293-4.347,26.663,26.663,0,0,0-.293-4.347Z" transform="translate(11.957 3.333)"/>
      </g>
    </svg>
  )
}

export default DarkModeIcon
