import Header from "../utilizavel/Header";
import { useNavigate } from "react-router-dom";
export default function InicioSecretaria() {

    const navigate = useNavigate();

    const VerOnibus = () => {
        navigate('/secretaria/onibus')
    }
    const CadastroIngressos = () => {
        navigate('/secretaria/cadastro/ingressos')
    }
    const CadastroCoordenadores = () => {
        navigate('/secretaria/cadastro/coordenares')
    }
    
    return (
        <div className="container">
            <Header which={"secretaria"} />
            <main>
        <h1>Secretária</h1>
        <div className="inicio">
          <div className="CRUD">
            <h3>Coordenadores</h3>
            <button onClick={CadastroCoordenadores}>Ver Coordenadores</button>
          </div>
          <div className="CRUD">
            <h3>Onibus</h3>
            <button onClick={VerOnibus}> Ver Onibus</button>
          </div>
          <div className="CRUD">
            <h3>Ingresso</h3>
            <button onClick={CadastroIngressos}>Ver Ingressos</button>
          </div>
          
        </div>
      </main>
        </div>
    );
}