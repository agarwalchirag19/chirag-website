import Login from './Login';
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
        <div className="cursor-default bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 ">
          <h1 className="text-2xl text-red-700 px-[200px] py-[613px] ">
            fuyasygfifb
          </h1>
        </div>
      </div>
    );

  return null;
}
