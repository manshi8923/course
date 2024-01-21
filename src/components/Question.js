import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article >
      <span>
        <h2 className='span'>{title} <button className='btn1' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button> </h2>
        <span>
        </span>
      </span>
      {showInfo && <span className='p'>{info}</span>}
    </article>
  );
};

export default Question;
