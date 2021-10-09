import './styles.css'

import { TextInputs } from '../TextInputs'
import { TituloLabel } from '../TituloLabel'

export const Body = ({  }) => {

  return (
    <div className="body">
      <TituloLabel value="Email: " />
      <TextInputs placeholder="Digite seu email" type="text" />
      <TituloLabel value="Senha: " />
      <TextInputs placeholder="Digite sua senha" type="password" />
    </div>
  );
}


