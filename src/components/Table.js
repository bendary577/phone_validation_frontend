import React, { Component } from 'react';
import DataContext from '../context/DataContext';

class Table extends Component {
    
    static contextType = DataContext;

    render() {
        const { data, isThereAnError, error} = this.context;
        return (
           <div class="container my-5 h-50">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Number</th>
                        <th scope="col">State</th>
                        <th scope="col">Country</th>
                        <th scope="col">Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isThereAnError === true ? 
                                <h3 className="text-danger">{error}</h3>
                            :
                            
                            data.map((item)=>{
                                return(
                                        <tr key={item.id}>
                                            <th scope="row">{item.phone}</th>
                                            <td>{
                                                item.state === "valid" ? 
                                                    <h6 className="text-success">{item.state}</h6>
                                                :
                                                    <h6 className="text-danger">{item.state}</h6>
                                            }</td>
                                            <td>{item.country}</td>
                                            <td>{item.countryCode}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
           </div>
        )
    }
}

export default Table;