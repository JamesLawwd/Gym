import React from 'react'

function Featurebox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=''/>

        </div>

        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>Sweat now, shine later, conquer every challenge</p>

        </div>
      
    </div>
  )
}

export default Featurebox
