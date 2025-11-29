import React from "react";
import Button from "./Button";

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault()
    }
  return (
    <div className="text-center mb-5 ">
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input type="email" placeholder="Enter your email" className="w-full sm-flex-1 outline-none"/>
        <Button >SUBSCRIBE</Button>
      </form>
    </div>
  );
};

export default NewsletterBox;
