import React, {Fragment} from 'react';
import '../../src/index.css';
import NavBar from './layout/NavBar';
import Footer from '../components/layout/Footer'


const Home = () => {
    return ( 
        <Fragment>
            <NavBar/>
                <h1>Soy la home</h1>
            <Footer/>
        </Fragment>
        
     );
}
 
export default Home;