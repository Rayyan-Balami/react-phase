import React from 'react'

function Screen({expression,result}) {
  return (
    <div className='h-16'>
          <input
            type="text"
            name="calc"
            id="calc"
            className="w-full block text-left text-lg focus:ring-0 focus:ring-offset-0 outline-0 bg-transparent"
            readOnly
            value={expression}
          />
          <div className="font-medium text-3xl text-right " id="result">{result}</div>
        </div>
  )
}

export default Screen