import React, { Component } from 'react';
import '../assets/css/footer.css';

class Footer extends Component {

    render() {
        return (
            <footer class="bg-light text-center text-lg-start" id="footer">
                <div class="text-center p-3">
                    © 2021 Copyright:
                    <a class="text-dark" href="">Validatee.com</a>
                </div>
            </footer>
        )
    }
}

export default Footer;