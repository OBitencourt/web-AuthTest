import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/sign-up'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'
import { ShowUsers } from './pages/showUsers'

function Home () {

  const client = new QueryClient()

  return (
    <>
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
    </>
  )
}

export default Home
