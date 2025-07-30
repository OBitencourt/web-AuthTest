import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/sign-up'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'
import { ShowUsers } from './pages/showUsers'
import { AuthContextProvider } from './contexts/auth/auth-context'
import { CookiesProvider } from 'react-cookie'

function Home () {

  const client = new QueryClient()

  return (
    <>
      <CookiesProvider>
        <AuthContextProvider>
            <QueryClientProvider client={client}>
                <BrowserRouter>
                  <Routes>
                    <Route index element={<SignUp />}  />
                    <Route path='/login' element={<Login />}  />
                    <Route path='/dashboard' element={<Dashboard />}  />
                    <Route path='/public' element={<ShowUsers />}  />
                  </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </AuthContextProvider>
      </CookiesProvider>
    </>
  )
}

export default Home
