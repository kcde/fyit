import React from 'react';
import './Instagram.css';
import igIcon from './icon-instagram.svg';
// eslint-disable-next-line
import gainIcon from '../icon-up.svg';
// eslint-disable-next-line
import lossIcon from '../icon-down.svg';

class Instagram extends React.Component {
    render() {
        return (
            <div className={`card spacer-y ig-card ${this.props.loggedIn}`}>
                <div className="social flex ai-c jc-c">
                    <img src={igIcon} className="social-icon mr-1" alt="instagram social icon" />
                    <p>@realnathanf</p>
                </div>

                <div className="fans">
                    <p>11K</p>
                    <span>Followers</span>
                </div>

                <div className="stats gain flex ai-c jc-c">
                    <img src={gainIcon} className="mr-05" alt="" />
                    <p>1099 Today</p>
                </div>
            </div>
        );
    }
}

export default Instagram;
