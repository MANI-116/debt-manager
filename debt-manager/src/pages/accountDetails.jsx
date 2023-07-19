import { useState } from "react"
 let balance = 1000000;

export default function ShowProfile(props){
    const [transactions,setTransactions] = useState([]);
    

    return (<>
    <div className='card'>
    
  
    <div className="description">
  
    <div>name</div>
    <div>village</div>
    <div>phone number</div>
    <div>amount</div>
    <div>due:</div>
  
    </div>
    <div>image</div>
  
    </div>
    <h2>Transactions</h2>
    {transactions.map((t)=> <Transaction date={t.date} type={t.type} amount={t.amount} prevBalance={t.prevBalance} AfterBalance={t.AfterBalance} />)}
    <CreateTransaction transactions={transactions} setTransactions={setTransactions} />
   
    </>)
  }

  function Transaction (props){

    return (<>
          <tr className="transaction-ele">
            <td className="transaction-ele-unit">
              {props.date}
            </td>
            <td className="transaction-ele-unit">
              {props.type}
            </td>
            <td className="transaction-ele-unit">
              {props.amount}
            </td>
            <td className="transaction-ele-unit">
              {props.prevBalance}
            </td>
            <td className="transaction-ele-unit">
              {props.AfterBalance}
            </td>
          </tr>
    </>)
  }
  
  function CreateTransaction(props){
    const [date,setDate] = useState('');
    const [type,setType] = useState('paid');
    const [amount,setAmount]=useState('');

    function handleCreate(){
        let transactions = [...props.transactions];
        transactions.push({date,type,amount,prevBalance:balance,AfterBalance:balance-amount})
        balance = balance - amount;

        props.setTransactions(transactions);


    
    }
  
    return (
      <div className='CreateTransaction'>
      <br />
       <div>
       <label htmlFor="date">date:</label>
       <input type="date" name="" id="" onChange={(e)=>setDate(e.target.value)}/>
       </div>
       
         <div>
         <label htmlFor="">Type: </label>
         <select name="" id="" onChange={(e)=>setType(e.target.value)}>
            
            <option value="debit">paid</option>
            <option value="credit">taken</option>
          </select>
         </div>
  
         <div>
         <label htmlFor="">amount</label>
         <input type="text" name="" id="" onChange={(e)=>setAmount(e.target.value)} />
         </div>
  
         <button className='submit' onClick={handleCreate}>Create</button>
      </div>
    )
  }
  