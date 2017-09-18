import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

class NavBar extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Menu style={{ cursor: 'pointer' }} position="center-align">
            <Menu.Item name="LOGO Goes Here" />
            <Menu.Item>
              <Input icon='search' placeholder='Search...' style={{ width: '500px'}} />
            </Menu.Item>
            <Menu.Item name="logout" />
            <Menu.Item name="login" />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBar;
