import React from 'react';
import '../ThemeToggle/ThemeToggle.css';

class ThemeToggle extends React.Component {
    toggleTheme() {
        const body = document.querySelector('body');
        body.classList.toggle('light-mode');
    }
    render() {
        return (
            <div className="theme-toggle">
                <p>Dark Mode</p>
                <div className="toggle">
                    <div className="switch" onClick={this.toggleTheme}></div>
                </div>
            </div>
        );
    }
}

export default ThemeToggle;
