'use client'

import { useEffect, useState } from "react";


export default function Home() {

  const [nota1, setNota1] = useState<number>(0);
  const [nota2, setNota2] = useState<number>(0);
  const [nota3, setNota3] = useState<number>(0);

  const calcularMedia = () => {
    const media = (((nota1 * 4)+(nota2 * 5)+(nota3 * 6))/15);
  }


  return (
    <>
    <main>
      <div> {/* Container */} 
        <div>
          <form>
            <input type="number" placeholder="Nota 1" />
            <input type="number" placeholder="Nota 2" />
            <input type="number" placeholder="Nota 3"/>
            <button>Calcular Nota</button>
          </form>
        </div>
        <div>
          {

          }
        </div>
      </div>
    </main>
    </>
  );
}
