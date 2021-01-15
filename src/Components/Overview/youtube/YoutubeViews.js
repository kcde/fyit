import React from 'react';
import ytIcon from './icon-youtube.svg';

class YoutubeViews extends React.Component {
    render() {
        return (
            <div className="card engagement ig-profile-views">
                <div className="engagement-head flex ai-c jc-sb mb-3">
                    <p className="">Total Views</p>
                    <img src={ytIcon} alt="" />
                </div>

                <div className="engagement-stats flex ai-fe jc-sb">
                    <p>1407</p>
                    <span className="loss stats flex ai-c jc-c">
                        <p>12%</p>
                    </span>
                </div>
            </div>
        );
    }
}

export default YoutubeViews;
