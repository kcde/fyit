import React from 'react';
import './Accounts.css';
import Facebook from './Facebook/Facebook';
import Youtube from './Youtube/Youtube';
import Instagram from './Instagram/Instagram';
import Twitter from './Twitter/Twitter';

class Accounts extends React.Component {
    render() {
        return (
            <div className="cards primary-cards mb-6">
                <Facebook />

                <Youtube />

                <Instagram />

                <Twitter />
            </div>
        );
    }
}

export default Accounts;
