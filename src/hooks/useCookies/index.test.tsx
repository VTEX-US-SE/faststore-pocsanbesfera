import { getCookieValue, setCookieValue } from './index'

describe('getCookieValue', () => {
  beforeEach(() => {
    // Clear cookies before each test
    document.cookie = ''
  })

  test('should return the value of an existing cookie', () => {
    document.cookie = 'testCookie=testValue'
    expect(getCookieValue('testCookie')).toBe('testValue')
  })

  test('should return null if the cookie does not exist', () => {
    expect(getCookieValue('nonExistentCookie')).toBeNull()
  })
})

describe('setCookieValue', () => {
  beforeEach(() => {
    // Clear cookies before each test
    document.cookie = ''
  })

  test('should set a simple cookie', () => {
    setCookieValue('testCookie', 'testValue')
    expect(document.cookie).toContain('testCookie=testValue')
  })

  test('should set a cookie with an expiration date', () => {
    const expires = new Date(Date.now() + 86400 * 1000) // 1 day
    setCookieValue('testCookie', 'testValue', { expires })
    expect(document.cookie).toContain('testCookie=testValue')
  })

  test('should set a cookie with an expiration in days', () => {
    setCookieValue('testCookie', 'testValue', { expires: 7 })
    expect(document.cookie).toContain('testCookie=testValue')
  })

  test('should set a cookie with path, domain, secure, and sameSite options', () => {
    setCookieValue('testCookie', 'testValue', {
      path: '/',
      domain: 'example.com',
      secure: true,
      sameSite: 'Strict',
    })
    expect(document.cookie).toContain('testCookie=testValue')
  })
})
