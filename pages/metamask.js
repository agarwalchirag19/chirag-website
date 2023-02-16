import React, {useState} from "react";
import {ethers} from 'ethers';



const MetaMask = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result=>{
                accountChanged([result[0]])
            })
        } else {
            setErrorMessage('Install Metamask Please!')
        }
    
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName);
    }
    
    return (
        <div className="text-center tracking-wider cursor-default">
            <h1>MetaMask</h1>
            <button onClick={connectWallet}>Connect</button>
            <h1> Address: {defaultAccount}</h1>
        
        {errorMessage}
        </div>
    )
}



export default MetaMask;