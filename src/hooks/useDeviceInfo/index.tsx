import { useState, useEffect } from 'react'

const useDeviceInfo = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true)

  useEffect(() => {
    const userAgent = window.navigator.userAgent

    if (/Mobi|Android/i.test(userAgent)) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  return isMobile
}

export default useDeviceInfo
