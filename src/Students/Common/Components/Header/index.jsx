import React from 'react'
import { Row, Col, Button } from 'reactstrap'

export default function Header(props) {
    const { toggleLeftMenu } = props
    return (
        <div>
            <Row className='pt-2 pb-2 bg-info'>
                <Col xs={1} className='px-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => toggleLeftMenu(true)}
                        width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#eeebe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </Col>
                <Col xs={9} className='bg-info text-center'> ATS Institute </Col>
                <Col className='text-end px-4'> 
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#eeebe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/>
                    <circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
                </Col>
            </Row>
        </div>
    )
}
