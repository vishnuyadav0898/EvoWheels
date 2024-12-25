import React, { useEffect, useState } from 'react';

function ContactusForm() {
  const [visible, setVisible] = useState(true);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Pincode, setPincode] = useState('');
  const [Filled, setFilled] = useState(false);

  useEffect(() => {
    let interval;
    if (!Filled) {
      interval = setInterval(() => {
        setVisible(true);
      }, 180000); // Show form again after 3 minutes
    }
    return () => clearInterval(interval);
  }, [Filled]);

  const displayHide = () => {
    setVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilled(true);
    setVisible(false);

    const userInfo = {
      Name,
      Email,
      Phone,
      Pincode,
      orders: [],
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userInfo);
    localStorage.setItem('users', JSON.stringify(users));
  };

  return (
    <div>
      {visible && (
        <div className='fixed inset-0 flex items-center justify-center z-50  bg-opacity-0 p-4'>
          <div className='w-full sm:w-[85vw] md:w-[60vw] lg:w-[55vw] xl:w-[55vw] 2xl:w-[45vw] h-[70vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] bg-gray-400 p-4 sm:p-8 md:p-10 lg:p-14 2xl:p-16 rounded-xl flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-4 w-full'>
              <label htmlFor='name'></label>
              <input
                value={Name}
                onChange={(e) => setName(e.target.value)}
                className='p-2 sm:p-3 rounded-md text-sm sm:text-base md:text-lg border-none outline-none bg-zinc-200'
                type='text'
                name='name'
                placeholder='Your Name'
                required
              />

              <label htmlFor='email'></label>
              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className='p-2 sm:p-3 rounded-md text-sm sm:text-base md:text-lg border-none outline-none bg-zinc-200'
                type='email'
                name='email'
                placeholder='Your Email'
                required
              />

              <label htmlFor='phone'></label>
              <input
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                className='p-2 sm:p-3 rounded-md text-sm sm:text-base md:text-lg border-none outline-none bg-zinc-200'
                type='tel'
                name='phone'
                placeholder='Phone Number'
                required
              />

              <label htmlFor='pincode'></label>
              <input
                value={Pincode}
                onChange={(e) => setPincode(e.target.value)}
                className='p-2 sm:p-3 rounded-md text-sm sm:text-base md:text-lg border-none outline-none bg-zinc-200'
                type='tel'
                name='pincode'
                placeholder='Pin Code'
                required
              />

              <button
                className='h-10 sm:h-12 w-36 sm:w-40 md:w-48 bg-zinc-700 rounded-md text-white text-sm sm:text-base md:text-lg mx-auto mt-3'
                type='submit'>
                I’m interested.
              </button>
              <button
                onClick={displayHide}
                className='h-10 sm:h-12 w-40 sm:w-44 md:w-52 bg-zinc-700 rounded-md text-white text-sm sm:text-base md:text-lg mx-auto mt-3'>
                Maybe Later
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactusForm;
