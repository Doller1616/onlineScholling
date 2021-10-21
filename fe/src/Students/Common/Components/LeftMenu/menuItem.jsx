import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const defaultProps = {
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#eeebe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>,
    text : 'No Name',
    to: '/'    
}
const menuItem = ({icon, to, text}) =>(
        <li className='p-2' >
          <Link to={to} style={{display:'flex', justifyContent:'space-between'}}>
              {icon}
            <span style={{color:'white'}}> {text} </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#eeebe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </Link>
        </li>
    );
menuItem.defaultProps = defaultProps;
menuItem.propTypes = {
    icon : PropTypes.element,
    to: PropTypes.string,
    text : PropTypes.string
}

export default menuItem
