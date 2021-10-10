import './styles.css'

import { TextInputs } from '../TextInputs'
import { TituloLabel } from '../TituloLabel'
import { Button } from '../Button';

export const Body = () => {

  return (
    <section className="body">
        
        {/* Acrescentar logo do CA*/}

        <TituloLabel value="Email: " />
        <TextInputs placeholder="Digite seu email" type="text" />
        <TituloLabel value="Senha: " />
        <TextInputs placeholder="Digite sua senha" type="password" />
      
      
        <Button placeholder="Entrar" />
      
    </section >
  );
}


