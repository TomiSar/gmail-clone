import React from 'react';
import './Header.css';

import {
  Menu,
  Search,
  ArrowDropDown,
  Help,
  Notifications,
  Settings,
  Apps,
} from '@material-ui/icons';
import { IconButton, Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOutGmail = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://cdn.vox-cdn.com/thumbor/K-q2WRPRyxxzzPLjxHGt26swMfM=/0x0:1320x880/1200x800/filters:focal(555x335:765x545)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg"
          alt="GMail logo"
        />
      </div>

      <div className="header__middle">
        <Search />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header__inputcaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <Help />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <Avatar
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={signOutGmail}
        />
      </div>
    </div>
  );
}

export default Header;
