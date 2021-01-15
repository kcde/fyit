import React from 'react';
import Twicon from './icon-twitter.svg';

class TwitterLikes extends React.Component {
    render() {
        return (
            <div className="card engagement ig-profile-views">
                <div className="engagement-head flex ai-c jc-sb mb-3">
                    <p class="">Likes</p>
                    <img src={Twicon} class="" alt="" />
                </div>

                <div className="engagement-stats flex ai-fe jc-sb">
                    <p>52k</p>
                    <span className="gain stats flex ai-c jc-c">
                        <p>1375%</p>
                    </span>
                </div>
            </div>
        );
    }
}

export default TwitterLikes;
