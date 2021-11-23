import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className='sidebar-link-container'>

                <Link className="side-link" to="/homes">Home Plans</Link>
                <Link className='side-link' to="/lots">Lot Plans</Link>
            </div>
        </div>
    )
}

export default Sidebar
