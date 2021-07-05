import React, { Component } from 'react';
import logo from '../assets/icons/logo.png';

class Navbar extends Component {
    render() {
        return (
            <div class="">
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                            Validatee
                    </a>
                </nav>
            </div>
        )
    }
}

export default Navbar;