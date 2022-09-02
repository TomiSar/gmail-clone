import React from 'react';
import './MailRow.css';
import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';

function MailRow({ id, recipient, subject, content, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        recipient,
        subject,
        content,
        time,
      })
    );
    history.push('/mail');
  };

  return (
    <div className="mailrow" onClick={openMail}>
      <div className="mailrow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="mailrow__recipient">{recipient}</h3>

      <div className="mailrow__message">
        <h4>
          {subject} <span className="mailrow__content">{' - ' + content}</span>
        </h4>
      </div>

      <p className="mailrow__time">{time}</p>
    </div>
  );
}

export default MailRow;
