import React from 'react';
import {NavLink} from 'react-router-dom';
import './side-bar.style.css';
import './icomoon.css';
import './icondashboard.css';
import plus from '../../assets/Bitmap.png';



export const SideBar = () => {
    return(
        <aside className="side-nav" id="show-side-navigation1">
      <i className="fa fa-bars close-aside hidden-sm hidden-md hidden-lg" data-close="show-side-navigation1"></i>
      <div className="heading">
        <div className='rectangle-4-copy-8' >
            <span className='homepage-h-1-copy-4'>
                B
            </span>
        </div>
        <span className='business-name'>
        Business name   <i style={{color:'#8993A4'}} class="fas fa-angle-down"></i>
        </span>

      </div>
      
      <ul className="categories">
        
        <li><NavLink  to=""><i className="fas fa-home font-sidebar"></i> Dashboard</NavLink>
          
        </li>
        <li><NavLink onlyActiveOnIndex exact activeClassName='active' to="/balance"><span className="pay-icondashboard font-sidebar"></span> Balances</NavLink>
          
        </li>
        <li><NavLink  to=""><i className="far fa-credit-card font-sidebar"></i> Payments</NavLink>
          
        </li>
        <li><NavLink onlyActiveOnIndex exact activeClassName='active' to="/transfer"><i className="fas fa-download font-sidebar"></i> Transfers</NavLink>
          
        </li>
        <li><NavLink to=""><i className="fas fa-code font-sidebar"></i> Developers</NavLink>
          
        </li>
        <li><NavLink  to=""><i className="fas fa-cog font-sidebar"></i> Settings</NavLink>
          
          </li>
       
      </ul>

      <button className='btn-footer'>
        <img  src={`${plus}`} />Accept Payment
      </button>
    </aside>
    )
}
