"use client";
import React from "react";

const Success = () => {
  return (
    <div className="success-message">
      <h1>Thank You!</h1>
      <h3>Payment Successful</h3>
      <div className="btn-wrapper">
        <a href="/" >Back to home page</a>
      </div>
    </div>
  );
};

export default Success;