
import { useNavigate } from "react-router-dom"
import {useState} from 'react'

let transactionsObject = [{name:"mani",village:"ullagallu",ph:"9701836209",amountDue:"100000"},
{name:"mani kanta",village:"ullagallu",ph:"9701836209",amountDue:"100000"},
{name:"vathala mani kanta",village:"ullagallu",ph:"9701836209",amountDue:"100000"},
]

export default function LoansStatusSections(){
  const [transactionStatus,setTransactionStatus] = useState(transactionsObject)

    return(
        <>
        <TransactionHeader />

            <div className='loans'>
            {
            transactionStatus.map((t) => <ShowTransaction name={t.name} village={t.village} ph={t.ph} amountDue={t.amountDue} />)
            }

            </div>
            <CreateProfile setTransactionStatus={setTransactionStatus} transactionStatus={transactionStatus}/>
        </>
    )
}


function ShowTransaction(props){
    const navigate  = useNavigate();
    
    const navigateTo = (url) =>{
        navigate(url)
    }

    return (
    
      <tr className='ShowTransaction' onClick={()=> navigateTo("/accountDetails")}>
        <td className='show-Transaction-unit'>{props.name}</td>
        <td className='show-Transaction-unit'>{props.village}</td>
        <td className='show-Transaction-unit'>{props.ph}</td>
        <td className='show-Transaction-unit'>{props.amountDue}</td>
      </tr>
      )
  }
  
  function TransactionHeader(){
  
    return (
      <div className='transactionHeader'>
  
      <div className='transactionHeader-unit'> <h2>Name</h2></div>
      <div className='transactionHeader-unit'><h2>Place</h2></div>
      <div className='transactionHeader-unit'><h2>phone</h2></div>
      <div className='transactionHeader-unit'><h2>Due</h2></div>
  
      </div>
    )
  }

  function CreateProfile(props){

    const [name,setName] = useState('');
    const [village,setVillage] = useState('');
    const [phone,setPhone] = useState('');
    const [amount,setAmount] = useState('');

    function handleCreateClick(){

      let currentStatus = [...props.transactionStatus]
      currentStatus.push({name,village,ph:phone,amountDue:amount})
      props.setTransactionStatus(currentStatus)

    }

    return (
  
      <div className='createProfile'>
  
        <h2>create account</h2>
       
          <div className='step'>
          <label htmlFor="">name:</label>
          <input type="text" name="" id=""  onChange={(e)=>setName(e.target.value)}/>
          </div>
  
            <div className='step'>  
            <label htmlFor="">village:</label>
            <input type="text" name="" id="" onChange={(e)=>setVillage(e.target.value)} />
             </div>
        
  
        <div className='step'>
        <label htmlFor="">phone number:</label>
        <input type="text" name="" id="" onChange={(e)=>setPhone(e.target.value)} />
        </div>
  
        <div className='step'>
        <label htmlFor="">amount:</label>
        <input type="text" name="" id="" onChange={(e)=>setAmount(e.target.value)}/>
        </div>
  
        <button className= 'submit' type='submit' onClick={handleCreateClick}>Create</button>
  
      </div>
  
      
  
    )
  }
  