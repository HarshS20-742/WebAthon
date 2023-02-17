import React from 'react'
import foodItems from '../foodItems'
import MainDish from '../Components/MainDish'

export default function HomeScreen() {
  return (
    <div>
        <div className='row'>
            {foodItems.map(dishes=>{
                return <div className='col-md-4'>
                    <div>
                        <MainDish dish= {dishes}/>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}
