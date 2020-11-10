import React from 'react';
import css from './card.module.css';

export default function Card({ children }) {
  //  return <div className={css.card}>{children}</div>;
  const classes = `card ${css.cardExtra}`;
  return <div className={classes}>{children}</div>;
}
