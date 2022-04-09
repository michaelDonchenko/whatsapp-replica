import { useEffect } from 'react'
import { useState } from 'react'

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function onWidthChange() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', onWidthChange)

    return () => {
      window.removeEventListener('resize', onWidthChange)
    }
  }, [])

  return { width }
}

export default useWidth
