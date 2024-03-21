import { getHotelById } from '@/actions/getHotelById'
import AddHotelForm from '@/components/hotel/AddHotelForm'
import { auth } from '@clerk/nextjs'
import React from 'react'


interface HotelPageProps {
    params : {
             hotelId: string
    }
}


const Hotel =  async ( {params}: HotelPageProps) => {
  const hotel = await getHotelById(params.hotelId)
//   const {userId} = auth()
  
//   if(!userId) return <div> Not Authentication</div>

//   if(hotel && hotel.userid !== userId) return <div> Access denied ...</div>
  return (
    <div>
 
    <AddHotelForm hotel={hotel}/>
    </div>
  )
}

export default Hotel