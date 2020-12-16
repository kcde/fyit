import React from 'react';
import './App.css';
import logo from './logo.png';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalFollowers: 0,
        };
    }
    render() {
        return (
            <div className="container pt-4">
                <header>
                    <div className="header-container mb-4">
                        <div className="header-left">
                            <div className="logo">
                                <img src={logo} alt="FYIT logo" />
                            </div>
                            {/* <h1 className="head">Social Media Dashboard</h1> */}
                            <span className="tagline">
                                Total Followers:{' '}
                                {!this.state.totalFollowers
                                    ? 'Please connect an account with activities'
                                    : this.state.totalFollowers}
                            </span>
                        </div>

                        <div className="header-right">
                            <ThemeToggle />
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
