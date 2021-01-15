import React from 'react';
import './error.css';

class Error extends React.Component {
    render() {
        return (
            <div className=" error">
                <div className=" flex ai-c jc-c error-text">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="40px"
                        height="40px"
                        className="mr-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={0.7}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <p>Connect account</p>
                </div>
                <div className="error-logo flex jc-c">
                    <img src={this.props.logo} alt="site logo" />
                </div>
            </div>
        );
    }
}

export default Error;
