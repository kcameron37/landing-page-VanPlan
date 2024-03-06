import React from 'react';


interface ButtonProps {
  buttonName: string;
}

export default function Button({ buttonName }: ButtonProps) {
  return (
    <div className="signupButton">
      <button>{buttonName}</button>
    </div>
  );
}