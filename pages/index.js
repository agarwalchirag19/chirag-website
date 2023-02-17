import Typewriter from "typewriter-effect";
import Footer from "../components/footer";
import Login from "./Login";
import Navbar from "../components/Navbar";
import MetaMask from "./metamask";


export default function Home() {
    return (
      <div id="connected">
        <Navbar />
        <MetaMask/>
        <div className="cursor-default bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-[100px] py-[161px]  ">
          <div className="flex flex-row">
            <div className="flex flex-row w-[70rem] overflow-hidden transfrom duration-500 hover:scale-90 p-10 bg-black">
              <h1 className="text-[30px] flex text-center align-text text-white indent-1">
              <Typewriter
                  options={{
                    strings: [
                      "Bitcoin mining refers to ensuring that transactions are valid and added to the Bitcoin blockchain correctly using a global network of computers running the Bitcoin code. The process of mining is also the means by which new Bitcoins are created. The process of bitcoin mining involves the verification of new transactions against the Bitcoin network, which results in the production of new bitcoins.Bitcoin mining is the process by which Bitcoin transactions are validated digitally on the Bitcoin network and added to the blockchain ledger.it is done by solving complex cryptographic hash puzzles to verify blocks of transactions that are updated on the decentralized blockchain ledger.Solving these puzzles requires powerful computing power and sophisticated equipment. In return, miners are rewarded with Bitcoin, which is then released into circulation hence the Bitcoin mining . Cryptocurrency mining is a process of creating new digital coins. However, that is as far as simplicity goes. The process of recovering these coins requires solving complex puzzles, validating cryptocurrency transactions on a blockchain network and adding them to a distributed ledger to locate them.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
            <h1 className="text-[2rem] align-text text-center w-[40rem] text-white px-10">
              <p className="p-3 text-[40px] overflow-hidden transfrom duration-500 hover:scale-90 underline tracking-wider">
                P R O S{" "}
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                1 . No restrictions on payment
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                2 . Maintainance of Anoniminty
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                3 . Use of Complex Algoritm
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                4 . No Third-Party Involvement
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                5 . Speed of Exchange
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                6 . Free/Less Transaction fees
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                7 . No Inflation
              </p>
              <br />
            </h1>
            <h1 className="text-[2rem] align-text text-center w-[40rem] text-white px-10 bg-black">
              <p className="p-3 text-[40px] overflow-hidden transfrom duration-500 hover:scale-90 underline tracking-wider">
                C O N S{" "}
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                1 . Lack of Awareness/Knowledge
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                2 . Use of Complex technique
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                3 . High Volatile in Nature
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                4 . Scale Issue
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                5 . Not Accepted Everywhere
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                6 . Victim of Theft & Scam
              </p>
              <br />
              <p className="overflow-hidden transfrom duration-500 hover:scale-90 p-1">
                7 . Black Market
              </p>
              <br />
            </h1>
          </div>
        </div>
        <div className="text-black">
          <Footer />
        </div>
      </div>
    );

  return null;
}