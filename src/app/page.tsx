'use client'

import { useEffect, useState } from "react";
import { verificarSituacao } from "./func/reprovado";


export default function Home() {

  const [nota1, setNota1] = useState<number>(0);
  const [nota2, setNota2] = useState<number>(0);
  const [nota3, setNota3] = useState<number>(0);
  const [media, setMedia] = useState<number>(0);
  const [situacao, setSituacao] = useState<string>("");


  const handleCalcularMedia = () => { 
    const mediaNota = ((nota1*4)+(nota2*5)+(nota3*6))/15;
    setMedia(mediaNota);
    setSituacao(verificarSituacao(mediaNota));
  }

  

  return (
    <>
    <div className="h-screen w-full">

      <div className="flex flex-col items-center justify-center mt-2">
        <div className="flex flex-col w-[50%] gap-2 items-center ">
          <label>Primeira Nota</label>
          <input type="number"
          className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e)=>setNota1(Number(e.target.value))}
          />
          <label>Segunda Nota</label>
          <input type="number"
          className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e)=>setNota2(Number(e.target.value))}
          />
          <label>Terceira Nota</label>
          <input type="number"
          className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e)=>setNota3(Number(e.target.value))}
          />
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleCalcularMedia}
          >Calcular Média</button>
          </div>
          <div className="w-[30%] gap-2 items-center justify-center justify-items-center">
            { media === 0 ? null :
              <div className="text-black font-semibold">
                <p>{media.toFixed(2)}</p>
                <p>Situação: {situacao}</p>
              </div>}
          </div>
      </div>

    </div>
    </>
  );
}
