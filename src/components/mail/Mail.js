import { IconButton } from '@material-ui/core';
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Markunread,
  Error,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  WatchLater,
  UnfoldMore,
  Print,
  ExitToApp,
} from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectOpenMail } from '../../features/mailSlice';
import './Mail.css';

function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsleft">
          <IconButton onClick={() => history.push('/')}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Markunread />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="mail__toolsright">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyheader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className="mail__important" />
          <p>{selectedMail?.recipient}</p>
          <p className="mail__time">{selectedMail?.time}</p>
        </div>

        <div className="mail__message">
          <p>{selectedMail?.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
