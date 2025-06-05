import React from 'react';
import Navbar from '../Components/Common/Navbar';
import { Outlet } from 'react-router-dom';

function UserLayout() {
  return (
    <>
      <Navbar />
      <main className="p-4">
            <Outlet />
      </main>
    </>
  );
}

export default UserLayout;