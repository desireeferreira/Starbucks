import { useState } from "react";
import { MainStyle, Copo, Section } from "./style";

export default function Home() {
  const [corSelecionada, setCorSelecionada] = useState("laranja");
  return (
    <MainStyle>
      <section>
        <h2>Mais que Café</h2>
        <h1>
          Isso é <span>Starbucks</span>
        </h1>
        <p>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
          dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
          Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas
          quentes e frias, doces diferenciados e sanduíches.
        </p>
        <button>SAIBA MAIS</button>
        <div>
           <img
            src="https://raw.githubusercontent.com/desireeferreira/Starbucks/main/src/assets/image/copolaranjap.png"
            alt="Copo pequeno laranja"
            onClick={() => setCorSelecionada("laranja")}
          />          
          <img
            src="https://raw.githubusercontent.com/desireeferreira/Starbucks/main/src/assets/image/copovermelhop.png"
            alt="Copo pequeno vermelho"
            onClick={() => setCorSelecionada("vermelho")}
           />           
           <img
            src="https://raw.githubusercontent.com/desireeferreira/Starbucks/main/src/assets/image/copoamarelop.png"
            alt="Copo pequeno amarelo"
            onClick={() => setCorSelecionada("amarelo")}
          />
         </div>
      </section>
      <Section>        
        <Copo
          src={`https://raw.githubusercontent.com/desireeferreira/Starbucks/main/src/assets/image/copo${corSelecionada}g.png`}
          alt={`Copo ${corSelecionada} grande`}
        />
        <elipse
          src={`https://raw.githubusercontent.com/desireeferreira/Starbucks/main/src/assets/image/ellipse${corSelecionada}.png`}
          alt={`elipse ${corSelecionada}`}
        />
        </Section>
    </MainStyle>
  );
}