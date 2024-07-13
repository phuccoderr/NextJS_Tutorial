"use client";
import Script from "next/script";
import React from "react";

const ChatBot = () => {
  return (
    <Script
      src="/chatbot.js"
      strategy="lazyOnload"
      onLoad={() => chatbotScript()}
    ></Script>
  );
};

export default ChatBot;
