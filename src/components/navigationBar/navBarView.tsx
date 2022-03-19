import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';

export function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <FaIcons.FaBars onClick={showSidebar} />
    </div>
  );
}
