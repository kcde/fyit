import React from 'react';
import './Twitter.css';
import twIcon from './icon-twitter.svg';
// eslint-disable-next-line
import gainIcon from '../icon-up.svg';
// eslint-disable-next-line
import lossIcon from '../icon-down.svg';

class Twitter extends React.Component {
    render() {
        return (
            <div className={`card spacer-y twitter-card ${this.props.loggedIn}`}>
                <div className="social flex ai-c jc-c">
                    <img src={twIcon} className="social-icon mr-1" alt="twitter social icon" />
                    <p>@nathanf</p>
                </div>

                <div className="fans">
                    <p>1044</p>
                    <span>Followers</span>
                </div>

                <div className="stats gain flex ai-c jc-c">
                    <img src={gainIcon} className="social icon mr-1" alt="" />
                    <p>99 Today</p>
                </div>
            </div>
        );
    }
}

export default Twitter;
