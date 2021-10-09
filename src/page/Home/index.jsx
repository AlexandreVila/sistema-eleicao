import './styles.css';

//import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { Body } from '../../components/Body';

function Home() {
  return (
    <section className="container">
      
      <div className="menu-container">
       
      </div>

      <div className="body-container">
        <Body/>
      </div> 
      <div className="footer-container">
        <Footer/>

      </div>

    </section>
  );
}

export default Home;
