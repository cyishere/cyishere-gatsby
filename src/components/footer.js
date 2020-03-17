import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <div className="uk-text-center uk-background-default">
            <div className="uk-container uk-padding">
                <div className="uk-align-left uk-text-small">&copy; 2020 Made with <span role="img" aria-label="heart">💖</span> by <Link to="/about">CY</Link> in Beijing.</div>
                <div className="uk-align-right">
                    <a className="uk-margin-small-right" href="https://twitter.com/cyishere" style={{ color: `#333`}}><i data-uk-icon="icon: twitter"></i></a>
                    <a href="https://github.com/cyishere" style={{ color: `#333`}}><i data-uk-icon="icon: github"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;