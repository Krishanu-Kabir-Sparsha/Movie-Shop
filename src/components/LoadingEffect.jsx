import { Progress } from '@nextui-org/react'
import React from 'react'

export default function LoadingEffect() {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
        <Progress
      size="sm"
      isIndeterminate
      aria-label="Loading..."
      className="max-w-md"
    />
    </div>
  )
}
