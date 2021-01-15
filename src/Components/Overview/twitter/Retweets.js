import React from 'react';
import Twicon from './icon-twitter.svg';

class Retweets extends React.Component {
    render() {
        return (
            <div className="card engagement twitter-retweets">
                <div className="engagement-head flex ai-c jc-sb mb-3">
                    <p className="">Retweets</p>
                    <img src={Twicon} alt="" />
                </div>

                <div className="engagement-stats flex ai-fe jc-sb">
                    <p>117</p>
                    <span className="gain stats flex ai-c jc-c">
                        <p>303%</p>
                    </span>
                </div>
            </div>
        );
    }
}

export default Retweets;
