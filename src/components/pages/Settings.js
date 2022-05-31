import React, { useEffect } from 'react'

function Settings() {

  useEffect(() => {
    alert('settings useeffect')
  }, [])

  return (
    <div>
      Settings page
    </div>
  )
}

export default Settings