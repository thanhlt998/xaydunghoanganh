import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPage } from '../actions/index';
import { bindActionCreators } from "redux";

import { Link } from 'react-router-dom';

class Navbar extends Component {
    renderSubLinks(subLinks) {
        if (subLinks.length == 0) {
            return null;
        }

        return (
            <ul className='dropdown arrow-top'>
                {subLinks.map(subLink => (
                    <li key={subLink.url}>
                        {/* <a href={subLink.url}>{subLink.description}</a> */}
                        <Link to={subLink.url}>{subLink.description}</Link>
                    </li>
                ))}
            </ul>
        );
    }

    renderNavbar() {
        return (
            <ul className="site-menu js-clone-nav d-none d-lg-block">
                {
                    this.props.pages.map(page => {
                        let description = page.description;
                        let subLinks = page.subLinks;
                        let pageClass = `${description === this.props.activePage ? 'active' : ''} ${subLinks.length > 0 ? 'has-children' : ''}`;
                        return (
                            <li className={pageClass} key={description} onClick={() => this.props.selectPage(page)}>
                                {page.url ? <Link to={page.url}>{description}</Link> : <a>{description}</a>}
                                {this.renderSubLinks(subLinks)}
                            </li>
                        );
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="site-navbar-wrap bg-white">
                <div className="site-navbar-top">
                    <div className="container py-2">
                        <div className="row align-items-center">
                            <div className="col-6">
                            </div>
                            <div className="col-6">
                                <div className="d-flex ml-auto">
                                    <a href="tel:02862569196" className="d-flex align-items-center ml-auto mr-4">
                                        <span className="icon-phone mr-2"></span>
                                        <span className="d-none d-md-inline-block">02862569196</span>
                                    </a>
                                    <a href="mailto:ctytmhoanganh@gmail.com" className="d-flex align-items-center">
                                        <span className="icon-envelope mr-2"></span>
                                        <span className="d-none d-md-inline-block">ctytmhoanganh@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-navbar bg-light">
                    <div className="container py-1">
                        <div className="row align-items-center">
                            <div className="col-md-4 col-6">
                                <h2 className="mb-0 site-logo">
                                    <Link to="/">
                                        <div className='row'>
                                            <div className='col-4'><img style={{height: '40px', width: 'auto'}} src='/images/logo.png' /></div>
                                            <div className='col-8 align-self-center'>HoangAnh</div>
                                        </div>
                                        {/* <div className='col-4'><img style={{ height: '40px', width: 'auto' }} src='/images/logo.png' /></div>
                                        <div className='col-8 align-self-center'>HoangAnh</div> */}
                                    </Link>
                                </h2>
                            </div>
                            <div className="col">
                                <nav className="site-navigation text-right" role="navigation">
                                    <div className="container">
                                        <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#"
                                            className="site-menu-toggle js-menu-toggle text-black"><span
                                                className="icon-menu h3"></span></a></div>
                                        {this.renderNavbar()}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pages: state.pages,
        activePage: state.activePage
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectPage: selectPage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

