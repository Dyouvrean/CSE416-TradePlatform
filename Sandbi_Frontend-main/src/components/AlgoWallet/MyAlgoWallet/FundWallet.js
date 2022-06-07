import React, {useState} from "react";
import { loadStdlib } from '@reach-sh/stdlib'
//import { FormStyle } from "../Form.style";
import { Button } from "bootstrap";
//import {  TransactionButton } from "../Button.styles";
const reach = loadStdlib("ALGO")

const FundAccount = ({account, getBalance}) =>{
    const [isLoading, setLoading] = useState(false)
    const [amount, setAmount] = useState("")

    const fundAccount = async () =>{
        try{
            setLoading(true)
            await reach.fundFromFaucet(account.current, reach.parseCurrency(+amount))
            await getBalance()
            setLoading(false)
            setAmount("")
        }catch(err){
            setLoading(false)
            console.log(err)
        }
       
    }

    return(
        <div>
        <div onChange = {(e) => setAmount(e.target.value)} placeholder="Enter amount" />  
            <button onClick ={fundAccount} > {isLoading ? "loading...": "Fund Account"}
        </button>
        </div>
    )
}

export default FundAccount

