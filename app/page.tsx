import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";


export default function Home() {
  return (
    <div className="m-7">
      <h1 className="bg-slate-700 text-white font-extrabold text-4xl p-3 flex items-center justify-center ">class assignment</h1>
      <br />
      <h1 className="bg-slate-700 text-white font-extrabold text-4xl p-3 flex items-center justify-center">class 2</h1>
      <h2 className="text-black-800 font-extrabold">I am created the components</h2>
      
      <Header/>
      <About/>
      <br />
      <br /><br /><br /><br /><br />
      <h3 className="bg-slate-700 text-white">Especially Thanks To All My Teachers Sir Asharib Ali Sir Naeem Hussain & Sir Ali Eijaz</h3>
    </div>
  );
}
