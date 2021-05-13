import React, { useState } from 'react';

import { FiHexagon } from 'react-icons/fi';

import { Nav, NavGroup, NavItem } from './index';

export default {
  title: 'Components/Nav',
};

export const Default = () => {
  const [active, setActive] = useState(0);
  return (
    <Nav breakpoint="sm">
      <NavGroup title="Other">
        <NavItem
          as="a"
          icon={FiHexagon}
          isActive={active === 2}
          onClick={() => setActive(2)}
        >
          Stuff 1
        </NavItem>
        <NavItem
          as="a"
          icon={FiHexagon}
          isActive={active === 3}
          onClick={() => setActive(3)}
        >
          Stuff 2
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
