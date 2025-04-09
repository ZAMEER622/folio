import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (username === '') {
      setErrMsg('Username is required!');
    } else if (phoneNumber === '') {
      setErrMsg('Phone number is required!');
    } else if (email === '') {
      setErrMsg('Please enter your email!');
    } else if (!emailValidation(email)) {
      setErrMsg('Enter a valid email address!');
    } else if (subject === '') {
      setErrMsg('Please enter a subject!');
    } else if (message === '') {
      setErrMsg('Message is required!');
    } else {
      emailjs
        .send(
          'service_jravjnq', // Your Service ID
          'template_r2kd3py', // Your Template ID
          {
            from_name: username,
            phone: phoneNumber,
            email: email,
            subject: subject,
            message: message,
          },
          'M2lhl-ZH4zI3F-SR5' // Your Public Key
        )
        .then(
          () => {
            setSuccessMsg(`Thank you ${username}, your message has been sent successfully!`);
            setErrMsg('');
            setUsername('');
            setPhoneNumber('');
            setEmail('');
            setSubject('');
            setMessage('');
          },
          (error) => {
            console.error('FAILED...', error);
            setErrMsg('Failed to send message. Please try again.');
          }
        );
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex items-center justify-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="flex flex-col justify-between w-full h-auto lgl:flex-row">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="flex flex-col w-full gap-4 py-2 lgl:gap-6 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="flex flex-col w-full gap-10 lgl:flex-row">
                <div className="flex flex-col w-full gap-4 lgl:w-1/2">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">Your name</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="contactInput"
                    type="text"
                  />
                </div>
                <div className="flex flex-col w-full gap-4 lgl:w-1/2">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">Phone Number</p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className="contactInput"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-wide text-gray-400 uppercase">Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="contactInput"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-wide text-gray-400 uppercase">Subject</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="contactInput"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-wide text-gray-400 uppercase">Message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="contactTextArea"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
