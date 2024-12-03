import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {useSelector} from 'react-redux'
export default function Home() {
  const {cars}= useSelector(state=>state.carsReducer)
  return (
   <DefaultLayout>
    <h1>
      Home Page
    </h1>
    <h1>the lenght of cars array is{cars.length} </h1>
   </DefaultLayout>
  )
}
