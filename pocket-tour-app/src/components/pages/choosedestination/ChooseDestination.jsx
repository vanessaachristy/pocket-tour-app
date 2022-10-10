import React from 'react'
import "./choosedestination.css"
import { DestinationData } from './DestinationData'
import { Link } from 'react-router-dom'


export const PopularSearchData = [
    {id: 1, title:'Singapore'},
    {id: 2, title:'Indonesia'},
    {id: 3, title:'Thailand'},
    {id: 4, title:'Malaysia'}
]
export default function ChooseDestination() {
  return (
    <div className='choosedestination'>
        <div className='choose-landing'>
            <h1>Plan your trip now</h1>
            <div className='search-box'>
                <div className='search-destination'>
                    <h2>Destination</h2>
                    <input className="form" type="text" id="fusername" name="fusername" placeholder="Where to?" />
                </div>
            </div>
        </div>
        
        <div className='popularsearch'>
            <h1>Popular Search</h1>
            <div className='popularsearch-container'>
                {PopularSearchData.map((popular)=>(
                    <div className='popularsearch-item'><Link to="/destination"><a>{popular.title}</a></Link></div>
                ))}
            </div>
        </div>
    </div>

  )
}
