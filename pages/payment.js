import {ethers} from 'ethers';
import account from './metamask';


const makepayment = () => {

    let transactionParam = {
        to: '0x45B6b39e1Cf8A6b4Ff2720f6BA0089d4574126E5',
        from: account,
        value: ethers.utils.parseEther('0.013')
      };
    
    const startpayment = () => {
        window.ethereum.request({method: 'eth_sendTransaction', params:[transactionParam]})
            .then(txhash=>{console.log(txhash)})
        }

}



export default makepayment;


// export default function makepayment(ether) {
//     const provider = ethers.provider.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();

//     const tx = signer.sendTransaction({
//       to: '0xfa6d6507660CC5AaFeF32968EA3F6789eD30Fa22',
//       value: ethers.utils.parseEther(ether)
//     });
// };