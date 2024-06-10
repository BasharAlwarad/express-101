import {Routes,Route} from 'react-router-dom'
import {Home,User,Users,Error} from './pages'
import {Nav,Footer} from './components'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/users/:id' element={<User/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
