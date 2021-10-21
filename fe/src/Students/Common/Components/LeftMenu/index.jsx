import React from 'react';
import PropTypes from 'prop-types'
import { Drawer } from 'antd';
import Icons from '@Students/Common/Utils/icons'
import MenuItem from './menuItem'

const defaultProps = {
  toggleLeftMenu : ()=> null, 
  visible : false
}
const LeftMenu = ({ toggleLeftMenu, visible }) => {
  return (
    <Drawer title="Amit Surana" placement="left" bodyStyle={{background:'rgba(13,202,240, 1)'}}
      headerStyle={{background:'lightgray'}} onClose={() => toggleLeftMenu(false)} visible={visible}>
      <ul className='p-0' style={{ listStyleType: "none" }}>
        < MenuItem to='/dashboard/home' text="HOME" icon={Icons.homeSvg} />
        < MenuItem to='/dashboard/syllabus' text="SYLLABUS" icon={Icons.syllabusSvg} />
        < MenuItem to='/dashboard/lectures' text="LECTURES" icon={Icons.lecturesSvg} />
      </ul>
    </Drawer>
  );
};

LeftMenu.defaultProps = defaultProps
LeftMenu.propTypes = {
  toggleLeftMenu : PropTypes.func,
  visible: PropTypes.bool
}
export default LeftMenu
