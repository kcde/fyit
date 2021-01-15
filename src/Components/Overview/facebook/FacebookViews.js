import React from 'react';

import fbIcon from './icon-facebook.svg';

class FacebookViews extends React.Component {
    render() {
        return (
            <div className="card engagement fb-page-views">
                <div className="engagement-head flex ai-c jc-sb mb-3">
                    <p className="">Page Views</p>
                    <img src={fbIcon} alt="" />
                </div>

                <div className="engagement-stats flex ai-fe jc-sb">
                    <p>87</p>
                    <span className="gain stats flex ai-c jc-c">
                        <p>3%</p>
                    </span>
                </div>
            </div>
        );
    }
}

export default FacebookViews;
