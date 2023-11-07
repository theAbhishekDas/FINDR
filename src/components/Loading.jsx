import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
        <RotatingLines type='puff' color='#ef4444' height={550} width={80}/>
        </div>
  )
}

export default Loading