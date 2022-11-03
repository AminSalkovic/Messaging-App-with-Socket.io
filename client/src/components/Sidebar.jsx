import React from 'react'
import {Tab,Nav} from 'react-bootstrap'
const Sidebar = ({id}) => {
    const CONVERSATION_KEY='conversation'
    const CONTACTS_KEY='coontacts'
  return (
    <div style={{width:'250px'}} className='d-flex flex-column'>

        <Tab.Container>
            <Nav>
                <Nav.Item>
                    <Nav.Link eventKey={CONVERSATION_KEY}>Conversations </Nav.Link>
                    <Nav.Link eventKey={CONTACTS_KEY}>Contacts </Nav.Link>
                </Nav.Item>
            </Nav>
        </Tab.Container>
    </div>
  )
}

export default Sidebar