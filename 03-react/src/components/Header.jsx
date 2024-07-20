import React from 'react'

function Header() {
  let time = new Date().toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});
  return (
      <div className="h-6 flex items-center justify-between mb-6">
          <div className="text-sm">{time}</div>
          <div className="flex items-center text-xs gap-2">
            <i className="fas fa-signal"></i>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-battery-three-quarters text-sm"></i>
          </div>
      </div>
  )
}

export default Header