// useDeviceInfo.test.tsx
import { renderHook } from '@testing-library/react-hooks'
import useDeviceInfo from './index'

describe('useDeviceInfo', () => {
  it('should return true for mobile user agents', () => {
    const mobileUserAgents = [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
      'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36',
      'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    ]
    mobileUserAgents.forEach((userAgent) => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: userAgent,
        writable: true,
      })
      const { result } = renderHook(() => useDeviceInfo())
      expect(result.current).toBe(true)
    })
  })
  it('should return false for non-mobile user agents', () => {
    const desktopUserAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15',
      'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1',
    ]
    desktopUserAgents.forEach((userAgent) => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: userAgent,
        writable: true,
      })
      const { result } = renderHook(() => useDeviceInfo())
      expect(result.current).toBe(false)
    })
  })
})
