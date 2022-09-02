import React from 'react';
import './Sidebar.css';
import {
  Add,
  Inbox,
  Star,
  AccessTime,
  LabelImportant,
  Send,
  Drafts,
  ExpandMore,
  Person,
  Duo,
  Phone,
} from '@material-ui/icons';
import { Button, IconButton } from '@material-ui/core';
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<Add fontSize="large" />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected />
      <SidebarOption Icon={Star} title="Starred" number={12} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={19} />
      <SidebarOption Icon={LabelImportant} title="Important" number={23} />
      <SidebarOption Icon={Send} title="Sent" number={15} />
      <SidebarOption Icon={Drafts} title="Drafts" number={15} />
      <SidebarOption Icon={ExpandMore} title="More" number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footericons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
