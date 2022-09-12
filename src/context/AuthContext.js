// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
  register: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      setIsInitialized(true)
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      if (storedToken) {
        setLoading(true)
        await axios
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: storedToken
            }
          })
          .then(async response => {
            setLoading(false)
            setUser({ ...response.data.userData })
          })
          .catch(() => {
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            setUser(null)
            setLoading(false)
          })
      } else {
        setLoading(false)
      }
    }
    initAuth()
  }, [])

  const handleLogin = (params, errorCallback) => {

    axios({
      url:  process.env.NEXT_PUBLIC_API_ENDPOINT ,
      method: 'post',
      data: {
        query: `
        mutation {
          login(email: "${params.email}", password: "${params.password}") {
              token
              user {
                  id
                  role_id
                  name
                  phone
                  email
                  username
                  status
                  role_id
                  created_at
                  updated_at
              }
          }
      }
          `
      }
    }).then((result) => {
      
      if(result.data.data.login.user.role_id == 6){
        result.data.data.login.user.role = 'admin'
      }

      window.localStorage.setItem(authConfig.storageTokenKeyName, result.data.data.login.token)
      console.log(result.data)
      axios
      .get( process.env.NEXT_PUBLIC_API_ENDPOINT , {
        headers: {
          Authorization: window.localStorage.getItem(authConfig.storageTokenKeyName)
        }
      })
      const returnUrl = router.query.returnUrl
      setUser({ ...result.data.data.login.user })
      window.localStorage.setItem('userData', JSON.stringify(result.data.data.login.user))
      const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
      router.replace(redirectURL)
    }).catch(err => {
      if (errorCallback) errorCallback(err)
    })
  }

  const handleLogout = () => {
    setUser(null)
    setIsInitialized(false)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleRegister = (params, errorCallback) => {
    axios
      .post( process.env.NEXT_PUBLIC_API_ENDPOINT , {
        query: `
        mutation {
          userCreate(data: {
              name: "${params.username}",
              phone: "9142627909",
              email: "${params.email}",
              username: "${params.username}",
              password: "${params.password}",
          }) {
              id
              role_id
              name
              phone
              email
              username
              status
              created_at
              updated_at
          }
      }
          `
      })
      .then(res => {
        if (res.data.errors) {
          if (errorCallback) errorCallback(res.data.errors)
        } else {
          handleLogin({ email: params.email, password: params.password })
        }
      })
      .catch(err => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
