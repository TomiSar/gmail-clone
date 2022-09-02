import React, { useState, useEffect } from 'react';
import './MailList.css';
import { IconButton, Checkbox } from '@material-ui/core';
import {
  ArrowDropDown,
  Redo,
  MoreVert,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  Settings,
  Inbox,
  People,
  LocalOffer,
} from '@material-ui/icons';
import MailRow from './MailRow';
import MailSection from './MailSection';
import { db } from '../../firebase';

function MailList() {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setMails(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="maillist">
      <div className="maillist__settings">
        <div className="maillist__settingsleft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="maillist__settingsright">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="maillist__sections">
        <MailSection Icon={Inbox} title="Primary" color="red" selected />
        <MailSection Icon={People} title="Social" color="#1A73E8" />
        <MailSection Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="maillist__list">
        {mails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <MailRow
            id={id}
            key={id}
            recipient={to}
            subject={subject}
            content={message}
            time={new Date(timestamp?.toDate()).toLocaleString()}
            // time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>

      <div className="maillist__list">
        <MailRow
          recipient="Twitch"
          subject="Hello Man!!"
          content="Testing EmailRow"
          time="10pm"
        />
        <MailRow
          recipient="Twitch"
          subject="This is cool!!"
          content="Coding Gmail clone with React"
          time="13pm"
        />
      </div>
    </div>
  );
}

export default MailList;
