import { useState } from "react";
import Card from "./componentes/Card";
import "./styles.css";
const App = () => {
  const [formData, setFormData] = useState({ seuNome: "", seuSentimento: "", imagemDaFelicidade:"" });
  const [emocoes, setEmocoes] = useState([""]);





  function salvarEmocao() {
    if (formData.seuNome == "" || formData.seuSentimento == "" || formData.imagemDaFelicidade == "") {
      alert("Preencha os campos para demonstrar sua emoção");
    } else {
      setEmocoes([
        ...emocoes, {
          nome:formData.seuNome,
          sentimento:formData.seuSentimento,
          url:formData.imagemDaFelicidade,
}])
        }
      ;
    
  }

  return (
    <div>
         
          <form>
         
        <fieldset class="formulario" name="Como você está">
        <h1>Como você está ?</h1>
          <div class="divform">
            <div>
              <input
                value={formData.seuNome}
                onChange={(event) =>
                  setFormData({ ...formData, seuNome: event.target.value })
                }
                placeholder="Digite seu nome"
              />
            </div>

            <div>
            <select value={formData.seuSentimento} onChange={(event)=> setFormData({...formData, seuSentimento:event.target.value})}>
            <option disabled hidden value="">
              Como está se sentindo?
            </option>
            <option value="😀 DevSeniorFeliz 😀">😀 DevSenior</option>
            <option value="😴 DevCansado">😴 DevCansado</option>
            <option value="😵  DevEstudante">😵  DevEstudante</option>
            <option value="🤐 DevCalado">🤐 DevCalado</option>
            <option value="🤑 DevJunior">🤑 DevJunior</option>
            <option value="🤧DevGripado">🤧DevGripado</option>
            <option value="🤒DevFebre">🤒DevFebre</option>
            <option value="🤬 DevComBug">🤬 DevComBug</option>
          </select>

         
                            
            </div>
          </div>
          <div>
              <input
                value={formData.imagemDaFelicidade}
                onChange={(event) =>
                  setFormData({ ...formData, imagemDaFelicidade: event.target.value })
                }
                placeholder="Digite seu nome"
              />
            </div>






          <button type="button" onClick={salvarEmocao}>
            Demonstre sua emoção
          </button>
        </fieldset>
      </form>
      {
      emocoes.map((emoticons)=>{
        return(

          <Card emoticons={emoticons}/>

      )})}

      
    </div>
  );
};

export default App;
