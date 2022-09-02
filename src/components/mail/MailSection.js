import React from 'react';
import './MailSection.css';

function MailSection({ Icon, title, color, selected }) {
  return (
    <div
      className={`mailsection ${selected && 'mailsection--selected'}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default MailSection;
