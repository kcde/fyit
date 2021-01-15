import React from 'react';
// eslint-disable-next-line

import ytIcon from './icon-youtube.svg';

class YoutubeLikes extends React.Component {
    render() {
        return (
            <div className="card engagement ig-profile-views">
                <div className="engagement-head flex ai-c jc-sb mb-3">
                    <p className="">Likes</p>
                    <img src={ytIcon} className="" alt="" />
                </div>

                <div className="engagement-stats flex ai-fe jc-sb">
                    <p>107</p>
                    <span className="loss stats flex ai-c jc-c">
                        <p>19%</p>
                    </span>
                </div>
            </div>
        );
    }
}

export default YoutubeLikes;
