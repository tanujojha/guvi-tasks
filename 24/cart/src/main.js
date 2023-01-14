import React from 'react';
import Card from './card'
import { cardData } from './data';

function Main({callback}) {


  return (
    <div className='mainsection row'>
        {
            cardData.map((item)=>{
                return <Card callback = {callback} item = {item}/>
            })
        }
    </div>
  )
}

export default Main