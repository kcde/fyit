import React from 'react';
import fbIcon from './icon-facebook.svg';

class FacebookViews extends React.Component {
    render() {
        return (
            <div className="card engagement fb-likes">
                <div className="engagement-head flex ai-c jc-sb mb-3">
                    <p className="">Likes</p>
                    <img src={fbIcon} alt="" />
                </div>

                <div className="engagement-stats flex ai-fe jc-sb">
                    <p>53</p>
                    <span className="loss stats flex ai-c jc-c">
                        <p>2%</p>
                    </span>
                </div>
            </div>
        );
    }
}

export default FacebookViews;
