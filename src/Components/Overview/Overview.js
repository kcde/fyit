import React from 'react';
import './Overview.css';
import FacebookViews from './facebook/FacebookViews';
import FacebookLikes from './facebook/FacebookLikes';
import YoutubeLikes from './youtube/YoutubeLikes';
import YoutubeViews from './youtube/YoutubeViews';
import InstagramLikes from './instagram/InstagramLikes';
import InstagramViews from './instagram/InstagramViews';
import Retweets from './twitter/Retweets';
import TwitterLikes from './twitter/TwitterLikes';

class Overview extends React.Component {
    render() {
        return (
            <div className="overview">
                <h2 className="mb-3">Overview - Today</h2>
                <div className="cards secondary-cards">
                    <FacebookViews />
                    <FacebookLikes />
                    <YoutubeLikes />
                    <YoutubeViews />
                    <InstagramLikes />
                    <InstagramViews />
                    <Retweets />
                    <TwitterLikes />
                </div>
            </div>
        );
    }
}

export default Overview;
