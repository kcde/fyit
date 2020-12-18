import React from 'react';
import './Accounts.css';
import Facebook from './Facebook/Facebook';

class Accounts extends React.Component {
    render() {
        return (
            <div class="cards primary-cards mb-6">
                {/* fb comp */}
                <Facebook />

                <div class="card spacer-y twitter-card">
                    <div class="social flex ai-c jc-c">
                        <img
                            src="./images/icon-twitter.svg"
                            class="social-icon mr-1"
                            alt="twitter social icon"
                        />
                        <p>@nathanf</p>
                    </div>

                    <div class="fans">
                        <p>1044</p>
                        <span>Followers</span>
                    </div>

                    <div class="stats gain flex ai-c jc-c">
                        <img src="./images/icon-up.svg" class="social icon mr-1" alt="" />
                        <p>99 Today</p>
                    </div>
                </div>

                <div class="card spacer-y ig-card">
                    <div class="social flex ai-c jc-c">
                        <img
                            src="./images/icon-instagram.svg"
                            class="social-icon mr-1"
                            alt="instagram social icon"
                        />
                        <p>@realnathanf</p>
                    </div>

                    <div class="fans">
                        <p>11K</p>
                        <span>Followers</span>
                    </div>

                    <div class="stats gain flex ai-c jc-c">
                        <img src="./images/icon-up.svg" class="mr-05" alt="" />
                        <p>1099 Today</p>
                    </div>
                </div>

                <div class="card spacer-y yt-card">
                    <div class="social flex ai-c jc-c">
                        <img
                            src="./images/icon-youtube.svg"
                            class="social-icon mr-1"
                            alt="youtube social icon"
                        />
                        <p>@Nathan F.</p>
                    </div>

                    <div class="fans">
                        <p>8239</p>
                        <span>subscribers</span>
                    </div>

                    <div class="stats loss flex ai-c jc-c">
                        <img src="./images/icon-down.svg" class="mr-05" alt="" />
                        <p>144 Today</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accounts;
