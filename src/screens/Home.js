import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadPhoneNumberComponent from '../components/LoadPhoneNumbers';
import PhonesSection from '../components/PhonesSection';
import DataContext from '../context/DataContext';

class Home extends Component {

    static contextType = DataContext;
    
    render() {

        const { data } = this.context;
        return (
            <div class="">
              <Navbar />
              <div className="">
                    {
                        data.length === 0 ? 
                        <LoadPhoneNumberComponent />
                        :
                        <PhonesSection />
                    }   
              </div>
              <Footer />
            </div>
        )
    }
}

export default Home;