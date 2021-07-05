import React, { Component } from 'react';
import DataContext from '../context/DataContext';
import axios from 'axios';
import {AllPhonesByCountryAPIEndPoint, AllPhonesByStateAPIEndPoint} from '../services/apis';

let countries = ["cameron", "ethiopia", "morocco", "mozampique", "uganda"];

class Filter extends Component {

    constructor(props){
        super(props);
        this.state  = {
            value: 'Select'
        }
    }

    static contextType = DataContext;

    handleRequest = (destination, value) => {
        let APIEndPoint;
        if(destination === 'country'){
            APIEndPoint = AllPhonesByCountryAPIEndPoint;
        }else{
            APIEndPoint = AllPhonesByStateAPIEndPoint;
        }
        axios
        .get(APIEndPoint + `/${value}`)
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

    handleChange = (value) =>{
        this.setState({value});
        let bool = countries.includes(value);
        if(bool === true){
            this.handleRequest('country', value);
        }else{
            this.handleRequest('state', value);
        }
    }

    render() {

        const { setData } = this.context;

        return (
            <form class="d-flex justify-content-center align-items-center mt-5">
                <div class="form-group row">
                    <div class="mr-3">
                        <h2>Filter By</h2>
                    </div>
                    <div class="mt-2">
                        <select name="filter" id="filter" class="custom-select" id="filter" onChange={ e => this.handleChange(e.target.value)} value={this.state.value}>
                            <option disabled value="select">Select</option>
                            <optgroup label="Country">
                                <option value="cameron">cameron</option>
                                <option value="ethiopia">ethiopia</option>
                                <option value="morocco">morocco</option>
                                <option value="mozampique">mozampique</option>
                                <option value="uganda">uganda</option>
                            </optgroup>
                            <optgroup label="State">
                                <option value="valid">valid</option>
                                <option value="not valid">not valid</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </form>
        )
    }
}

export default Filter;