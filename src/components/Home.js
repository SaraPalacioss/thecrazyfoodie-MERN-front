import React, {Fragment} from 'react';
import '../../src/index.css';
import NavBar from './layout/NavBar';
import Footer from '../components/layout/Footer'
import Form from '../components/Form';



const Home = () => {
    return ( 
        <Fragment>
            <NavBar/>
                <Form></Form>
            <Footer/>
        </Fragment>
        
     );
}
 
export default Home;