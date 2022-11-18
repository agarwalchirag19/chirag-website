import Login from "./Login";
import Navbar from "../components/Navbar";
import { useMetaMask } from "metamask-react";

export default function Home() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing")
    return (
      <div className="flex text-[40px] flex-1 justify-items-center">
        Synchronisation with MetaMask ongoing...
      </div>
    );

  if (status === "unavailable")
    return (
      <div className="flex text-[40px] flex-1 justify-items-center">
        MetaMask not available :
      </div>
    );

  if (status === "notConnected")
    return (
      <button onClick={connect}>
        <p className="flex text-[40px] flex-1 justify-items-center">
          Connect to MetaMask{""}
        </p>
      </button>
    );

  if (status === "connecting")
    return (
      <div className="flex text-[40px] flex-1 justify-items-center">
        Connecting...
      </div>
    );

  if (status == "connected")
    return (
      <div id="connected">
        <button id="none">
          Connected account {account} on chain ID {chainId}
        </button>
        <Navbar />
        <div className="cursor-default bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-[100px] py-[150px]  ">
          <div className="flex flex-row">
            <div className="flex flex-row w-[70rem] border-[6px] rounded overflow-hidden transfrom duration-500 hover:scale-90 ">
              <h1 className="text-[30px] flex text-center align-text text-black indent-1">
                Bitcoin mining refers to ensuring that transactions are valid
                and added to the Bitcoin blockchain correctly using a global
                network of computers running the Bitcoin code. The process of
                mining is also the means by which new Bitcoins are created. The
                process of bitcoin mining involves the verification of new
                transactions against the Bitcoin network, which results in the
                production of new bitcoins.Bitcoin mining is the process by
                which Bitcoin transactions are validated digitally on the
                Bitcoin network and added to the blockchain ledger.t is done by
                solving complex cryptographic hash puzzles to verify blocks of
                transactions that are updated on the decentralized blockchain
                ledger.Solving these puzzles requires powerful computing power
                and sophisticated equipment. In return, miners are rewarded with
                Bitcoin, which is then released into circulation hence the name
                Bitcoin mining.Cryptocurrency mining is a process of creating
                new digital "coins." However, that is as far as simplicity goes.
                The process of recovering these coins requires solving complex
                puzzles, validating cryptocurrency transactions on a blockchain
                network and adding them to a distributed ledger to locate them.
              </h1>
            </div>
            <h1 className="text-[2rem] align-text text-center w-[40rem] text-white">
              PROS
              <br />
              <br />
              <br />
             1 . No restrictions on payment
            <br />
            2 . Maintainance of Anoniminty
              <br />
              
            </h1>
            <h1 className="text-[2rem] align-text text-center w-[40rem] text-white">
              CONS
            </h1>
          </div>
        </div>
      </div>
    );

  return null;
}
