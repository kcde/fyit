import React from 'react';
import './Accounts.css';
import Facebook from './Facebook/Facebook';
import Youtube from './Youtube/Youtube';
import Instagram from './Instagram/Instagram';
import Twitter from './Twitter/Twitter';

class Accounts extends React.Component {
    constructor(props) {
        super(props);

        this.loggedIn = this.loggedIn.bind(this);

        this.state = {
            fb: {
                login: false,
            },
            yt: {
                login: false,
            },
            ig: {
                login: false,
            },
            tw: {
                login: false,
            },
        };
    }

    loggedIn(account) {
        return this.state[account].login;
    }

    render() {
        return (
            <div className="cards primary-cards mb-6">
                <Facebook loggedIn={this.loggedIn('fb')} />

                <Youtube loggedIn={this.loggedIn('yt')} />

                <Instagram loggedIn={this.loggedIn('ig')} />

                <Twitter loggedIn={this.loggedIn('tw')} />
            </div>
        );
    }
}

export default Accounts;
