import {Routes,Route} from 'react-router-dom'
import {Home,User,Users,Error} from './pages'
import {Nav,Footer} from './components'

function App() {

  return (
    <>
    <Nav/>
    <div className="min-h-[80vh]">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/users/:id' element={<User/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
