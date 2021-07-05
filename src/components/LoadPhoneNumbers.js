import React, { Component } from 'react';
import welcomeIcon from '../assets/icons/global.png';
import DataContext from '../context/DataContext';
import axios from 'axios';
import { AllPhonesAPIEndPoint } from '../services/apis';
import LoadPhonesButton from './LoadPhonesButton';

const IconStyle ={
    width : 400,
    height : 400
}

class LoadPhoneNumberComponent extends Component {

    static contextType = DataContext;

    handleClick = () => {
        axios
        .get(AllPhonesAPIEndPoint)
        .then(res => {
            const data = res.data;
            if(data.status == "OK"){
                this.context.setData(data.data);
                this.context.setPageCount(data.totalPages);
            }else{
                this.context.setIsThereAnError(true);
                this.context.setError("Sorry, there is no content")
            }
        });
    }

    render() {
        return (
                <div className="text-center">
                    <div className="">
                        <img src={welcomeIcon} alt="global phone validation" style={IconStyle}/>
                    </div>
                    <div className="my-3">
                        <h3>Validate Phone Numbers With One Click</h3>
                    </div>
                    <div>
                        <LoadPhonesButton handleClick={this.handleClick} />
                    </div>
                </div>
        )
    }
}

export default LoadPhoneNumberComponent;