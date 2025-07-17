import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/sign-up'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'

function Home () {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />}  />
          <Route path='/login' element={<Login />}  />
          <Route path='/dashobard' element={<Dashboard />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Home
