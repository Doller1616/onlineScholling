import React, { useState } from 'react';
import LeftMenu from '@Students/Common/Components/LeftMenu'
import Header from '@Students/Common/Components/Header'

const Dashboard = () => {
    const [visible, setVisible] = useState(false);
    const toggleLeftMenu = (value) => {
        setVisible(value);
    };
    return <div>
        <Header {...{ toggleLeftMenu }} />
        <LeftMenu {...{ visible, toggleLeftMenu }} />
    </div>
}
export default Dashboard