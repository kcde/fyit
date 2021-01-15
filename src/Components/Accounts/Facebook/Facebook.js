import React from 'react';
import './Facebook.css';
import fbIcon from './icon-facebook.svg';
import Error from '../../error/error';

class Facebook extends React.Component {
    render() {
        return (
            <div className={`card spacer-y fb-card`}>
                {!this.props.loggedIn ? <Error logo={fbIcon} /> : ''}

                <div className="social flex ai-c jc-c">
                    <img src={fbIcon} className="social-icon mr-1" alt="facebook social icon" />
                    <p>@nathanf</p>
                </div>

                <div className="fans">
                    <p>1987</p>
                    <span>Followers</span>
                </div>

                <div className="stats gain">
                    <p>12 Today</p>
                </div>
            </div>
        );
    }
}

export default Facebook;
