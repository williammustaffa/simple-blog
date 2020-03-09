import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Button, Menu } from 'semantic-ui-react';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('home');

  const dispatch = useDispatch();

  const navigateTo = path => (e, { name }) => {
    dispatch(push(path));
    setActiveItem(name);
  };

  return (
    <Menu>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={navigateTo('/')}
      />
      <Menu.Item
        name='dashboard'
        active={activeItem === 'dashboard'}
        onClick={navigateTo('/dashboard')}
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