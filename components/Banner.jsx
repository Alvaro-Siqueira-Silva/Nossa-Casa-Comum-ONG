import rafugilogo from "../src/assets/rafugilogo.png"
import Tradutor from "../src/assets/traduzy.png"
function Banner1 (){
    return(
        <div>
            <div className="sesao2">
                <div className="circulo">
                    <p>
                    Nossa missão é mais que um propósito, é o compromisso que impulsiona nossa paixão e compromisso diários. Na Nossa casa Comum acreditamos que cada vida não tem preço e que a resiliência e determinação dos refugiados merecem reconhecimento e apoio.
                    </p>
                </div>
                
                    <img className="imagy2" src={rafugilogo} alt="" />
                
                <div className="circulo">
                Junte-se a nós nesta jornada de compaixão, respeito e solidariedade. Estamos com inúmeros projetos para facilitar e auxiliar o nosso pessoal. Cada pequeno ato de apoio faz a diferença e contribui para um mundo onde todos possam viver com dignidade e oportunidade.
                </div>
            </div>

            <div className="sesao1">
                <div>
                    <h1>
                        Adaptação linguística inteligente
                    </h1>
                    <p>Um de nossos projetos tem o objetivo de desenvolver aplicativos que auxiliem os refugiados a aprender idiomas, assim os ajudando com mais eficiência a se integrarem e familiarizar com o idioma. Esse projeto é bem importante, já que uma vez que a barreira do idioma muitas vezes se torna um dos principais obstáculos para a comunicação e integração bem-sucedida.  O projeto consiste em um app que introduz o refugiado à língua do país, oferecendo aulas, grupos sociais de integração à comunidade e a linguística, além de um tradutor para a compreensão rápida caso necessite, nossa ONG também é aliada de vários profissionais que fornecem serviços nas principais línguas estrangeiras que os refugiados costumam falar e que os ajudam com o aprendizado do português.</p>
                </div>
            <img className="imagy1" src={Tradutor} alt="" />
        </div>
        </div>
    )
}
export default Banner1