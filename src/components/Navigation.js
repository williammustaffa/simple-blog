import React, { useState } from 'react'
import { Button, Menu } from 'semantic-ui-react'

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (e, { name }) => setActiveItem(name);


  return (
    <Menu>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='dashboard'
        active={activeItem === 'dasboardh'}
        onClick={handleItemClick}
      />

      <Menu.Menu position='right'>
        <Menu.Item>
          <Button.Group>
            <Button>Register</Button>
            <Button.Or />
            <Button color="red">Login</Button>
          </Button.Group>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Navigation;