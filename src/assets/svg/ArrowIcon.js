import React from 'react'

const TrainIcon = props => {
  return(
    <div className="turntable" style={{transform: 'rotateX(45deg)'}}>
      <svg className="arrow" 
        xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 144 144" style={{transform: `rotate(${props.rotation.current}deg)`}}>
        <path d="M152.816,88.318a64.5,64.5,0,1,0-64.5,64.5A64.5,64.5,0,0,0,152.816,88.318Z" transform="translate(-16.318 -16.318)" fill="#181818" fillRule="evenodd"/>
        <path d="M129,72a56.991,56.991,0,1,0-16.692,40.3A56.823,56.823,0,0,0,129,72Zm-6.088-50.911A72,72,0,1,1,72,0a71.773,71.773,0,0,1,50.911,21.089Z" transform="translate(0 0)" fill="#ffd400"/>
        <path d="M181.067,71.62l21.854,90.229-21.854-7.5-21.857,7.5Z" transform="translate(-109.067 -49.064)" fill="#ffd400" fillRule="evenodd"/>
      </svg>
    </div>
  )
}

export default TrainIcon;


