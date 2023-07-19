
import { useNavigate } from "react-router-dom"

export default function LoansStatusSections(props){

    return(
        <>
        <TransactionHeader />

            <div className='loans'>
            {
            props.data.map((t) => <ShowTransaction name={t.name} village={t.village} ph={t.ph} amountDue={t.amountDue} />)
            }

            </div>
            <CreateProfile />
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

  function CreateProfile(){

    return (
  
      <div className='createProfile'>
  
        <h2>create account</h2>
       
          <div className='step'>
          <label htmlFor="">name:</label>
          <input type="text" name="" id="" />
          </div>
  
            <div className='step'>  
            <label htmlFor="">village:</label>
            <input type="text" name="" id="" />
             </div>
        
  
        <div className='step'>
        <label htmlFor="">phone number:</label>
        <input type="text" name="" id="" />
        </div>
  
        <div className='step'>
        <label htmlFor="">amount:</label>
        <input type="text" name="" id="" />
        </div>
  
        <button className= 'submit' type='submit'>Create</button>
  
      </div>
  
      
  
    )
  }
  