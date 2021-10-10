import './styles.css';

import { Menu } from '../../components/Menu/index';
import { Footer } from '../../components/Footer';
import { Body } from '../../components/Body';
import { Component } from 'react';


class Home extends Component {

  state = {
    logado: false
  };

  // async componentDidMount() {
  // }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { logado } = this.state;

    return (
      <section className="container">

        <div className="menu-container">
         {/* <Menu/>   /// Configurar para aparecer o menu so quando logado*/}
        
        </div>

        <div className="body-container">
          <Body />
        </div>
        <div className="footer-container">
          <Footer />

        </div>

      </section>
    )
  }
}
export default Home;