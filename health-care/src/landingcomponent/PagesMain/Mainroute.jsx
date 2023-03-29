import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homelan } from './Homelan'


export const Mainroute = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Homelan/>}></Route>
          </Routes>
          
      </div>
  )
}
