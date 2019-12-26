import React from 'react'

const LightModeIcon = props => {
  return (
    <svg id="LightModeIcon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <defs>
        <style>
          {`
            #LightModeIcon .a{fill:none;}

            #LightModeIcon .b{fill:#3dbff0;}
          `}
        </style>
      </defs>
      <g transform="translate(0)">
        <path className="a" d="M0,0H64V64H0Z"/>
        <path className="b" d="M50.808,20.648V13.475a5.349,5.349,0,0,0-5.333-5.333H38.3L33.235,3.075a5.343,5.343,0,0,0-7.547,0l-5.04,5.067H13.475a5.349,5.349,0,0,0-5.333,5.333v7.173L3.075,25.715a5.343,5.343,0,0,0,0,7.547l5.067,5.067v7.147a5.349,5.349,0,0,0,5.333,5.333h7.173l5.067,5.067a5.343,5.343,0,0,0,7.547,0l5.067-5.067h7.147a5.349,5.349,0,0,0,5.333-5.333V38.3l5.067-5.067a5.343,5.343,0,0,0,0-7.547ZM29.475,45.475a16,16,0,1,1,16-16A16.013,16.013,0,0,1,29.475,45.475Zm0-26.667A10.667,10.667,0,1,0,40.142,29.475,10.664,10.664,0,0,0,29.475,18.808Z" transform="translate(2.525 2.525)"/>
      </g>
    </svg>
  )
}

export default LightModeIcon
