import React from 'react';
import Igicon from './icon-instagram.svg';

class InstagramViews extends React.Component {
    render() {
        return (
            <div className="card engagement ig-profile-views">
                <div className="engagement-head flex ai-c jc-sb mb-3">
                    <p className="">Profile views</p>
                    <img src={Igicon} alt="" />
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
export default InstagramViews;
