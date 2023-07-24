import { SearchContextProvider } from './context/SearchContext'
import './index.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <SearchContextProvider>
      <div className='App container'>
        <header className=' mt-8'>
          <h1 className='text-2xl font-poppins font-normal'><span className='font-bold'>Google</span> Jobs</h1>
        </header>
        <Outlet />
      </div>
    </SearchContextProvider>
  )
}

export default App
