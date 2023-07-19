
import './App.css'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import LoansStatusSections from './pages/index'

import ShowProfile from './pages/accountDetails.jsx'


let transactionsObject = [{name:"mani",village:"ullagallu",ph:"9701836209",amountDue:"100000"},
{name:"mani kanta",village:"ullagallu",ph:"9701836209",amountDue:"100000"},
{name:"vathala mani kanta",village:"ullagallu",ph:"9701836209",amountDue:"100000"},
]

function App() {
  

  return (
    <>
    <h1>srinivasa reddy loans</h1>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoansStatusSections data = {transactionsObject}/>}/>
      <Route path="/accountDetails" element={<ShowProfile />} />
    </Routes>
    </BrowserRouter>


    </>

  )

}





export default App
