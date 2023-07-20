
import './App.css'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import LoansStatusSections from './pages/index'

import ShowProfile from './pages/accountDetails.jsx'




function App() {
  

  return (
    <>
    <h1>srinivasa reddy loans</h1>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoansStatusSections/>}/>
      <Route path="/accountDetails" element={<ShowProfile />} />
    </Routes>
    </BrowserRouter>


    </>

  )

}





export default App
