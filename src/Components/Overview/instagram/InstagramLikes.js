import React from 'react';

import Igicon from './icon-instagram.svg';

class InstagramLikes extends React.Component {
    render() {
        return (
            <div className="card engagement ig-likes">
                <div className="engagement-head flex ai-c jc-sb mb-3">
                    <p className="">Likes</p>
                    <img src={Igicon} className="" alt="instagram icon" />
                </div>

                <div className="engagement-stats flex ai-fe jc-sb">
                    <p>5462</p>
                    <span className="gain stats flex ai-c jc-c">
                        <p>2257%</p>
                    </span>
                </div>
            </div>
        );
    }
}

export default InstagramLikes;
