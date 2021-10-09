import './styles.css'

import { Component } from "react";
import { TextInputs } from '../TextInputs'
import { TituloLabel } from '../TituloLabel'

export class Body extends Component {
  render() {
    return (
      <div className="body">
        <TituloLabel value="Email: "/>
        <TextInputs placeholder="Digite seu email" type="text"/>
        <TituloLabel value="Senha: "/>
        <TextInputs placeholder="Digite sua senha" type="password"/>
      </div>
    );
  }
}