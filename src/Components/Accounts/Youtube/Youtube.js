import React from 'react';
import './Youtube.css';
import ytIcon from './icon-youtube.svg';
// eslint-disable-next-line
import gainIcon from '../icon-up.svg';
// eslint-disable-next-line
import lossIcon from '../icon-down.svg';
import Error from '../../error/error';

class Youtube extends React.Component {
    render() {
        return (
            <div className={`card spacer-y yt-card ${this.props.loggedIn}`}>
                {!this.props.loggedIn ? <Error logo={ytIcon} /> : ''}

                <div className="social flex ai-c jc-c">
                    <img src={ytIcon} className="social-icon mr-1" alt="youtube social icon" />
                    <p>@Nathan F.</p>
                </div>

                <div className="fans">
                    <p>8239</p>
                    <span>subscribers</span>
                </div>

                <div className="stats loss flex ai-c jc-c">
                    <img src={lossIcon} className="mr-05" alt="" />
                    <p>144 Today</p>
                </div>
            </div>
        );
    }
}

export default Youtube;
