import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <div className="uk-container">
            <nav className="uk-navbar uk-hidden@s" data-uk-navbar>
                <div className="uk-navbar-left">
                    <span className="uk-navbar-toggle" style={{ cursor: `pointer` }} data-uk-navbar-toggle-icon></span>
                    <div className="uk-navbar-dropdown" data-uk-dropdown="mode: click">
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li className="uk-text-uppercase">
                                <Link to="/" activeClassName="active">home</Link>
                            </li>
                            <li className="uk-text-uppercase">
                                <Link to="/tags" activeClassName="active">by tags</Link>
                            </li>
                            <li className="uk-text-uppercase">
                                <Link to="/about" activeClassName="active">about</Link>
                            </li>
                            <li className="uk-text-uppercase">
                                <Link to="/links" activeClassName="active">links</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="uk-navbar uk-visible@s">
                <div className="uk-navbar-left">
                    <Link to="/" className="uk-logo"><i uk-icon="icon: code"></i> cyishere</Link>              
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li className="uk-text-uppercase">
                            <Link to="/" activeClassName="active">home</Link>
                        </li>
                        <li className="uk-text-uppercase">
                            <Link to="/tags" activeClassName="active">by tags</Link>
                        </li>
                        <li className="uk-text-uppercase">
                            <Link to="/about" activeClassName="active">about</Link>
                        </li>
                        <li className="uk-text-uppercase">
                            <Link to="/links" activeClassName="active">links</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;