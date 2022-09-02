import React from 'react';
import './SendMail.css';
import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import { db } from '../../firebase';
import firebase from 'firebase';

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  // Send Email and Send data to database
  const onSubmit = (data) => {
    console.log(data);
    db.collection('emails').add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // Close new message popup After form is submitted and Email is send
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendmail">
      <div className="sendmail__header">
        <h3>New Message </h3>
        <Close
          className="sendmail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register('to', { required: true })}
        />
        {errors.to && (
          <p className="sendmail__error">
            At least one recipient is required!!
          </p>
        )}

        <input
          placeholder="Subject"
          type="text"
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <p className="sendmail__error">Subject is required!!</p>
        )}

        <input
          className="sendmail__message"
          type="text"
          {...register('message', { required: true })}
        />
        {errors.message && (
          <p className="sendmail__error">Message is required!!</p>
        )}

        <div className="sendmail__options">
          <Button
            className="sendmail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
