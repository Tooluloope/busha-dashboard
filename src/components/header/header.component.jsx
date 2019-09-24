import React, { useState, useEffect, Component } from 'react';
import notification from '../../assets/notification.svg';
import { withRouter } from "react-router-dom";



import './header.style.css'






 class Header  extends Component {

    

    
    render() {
        let text, {location} = this.props

        switch (location.pathname) {
            case '/balance': {
              text = 'Balance'
              break;
            }
            case '/transfer': {
              text = 'Transfer'


              break;
            }
            case '': 
                test = 'Dashboard';

          }


    return(
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <i className="fa fa-align-right"></i>
                        </button>
                        <a className="navbar-brand page-title" href="#">
                            {text}
                        </a>
                    </div>
                    

                    <div className="collapse navbar-collapse navbar-right">
                        <ul className="nav navbar-nav margin">

                            <li className="tg-list-item margin-li-toggle ">
                                <input className="tgl tgl-light" id="cb1" type="checkbox"/>
                                <label className="tgl-btn" for="cb1"></label>
                            </li>
                            <li className='margin-li-test'><a  href="#" className='test-mode '>Test Mode</a></li>
                            <li className='margin-li-bell'><a  href="#" className='test-mode '><img className='icon-width-bell' src ={`${notification}`} /></a></li>

                            
                            <li className='margin-name'><a href="#" className='oluwatobi-mayowa'> <span className='oval'>O</span> Oluwatobi Mayowa</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
    }
}

export const WrappedHeader = withRouter(Header);
