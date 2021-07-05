import React, { Component } from 'react';
import Filter from './Filter';
import Table from './Table';
import DataContext from '../context/DataContext';
import LoadPhonesButton from './LoadPhonesButton';
import axios from 'axios';
import { AllPhonesAPIEndPoint } from '../services/apis';

class PhonesSection extends Component {


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
            <div class="my-5">
                <LoadPhonesButton handleClick={this.handleClick} />
                <Filter />
                <Table />
            </div>
        )
    }
}

export default PhonesSection;