import React, { useState, useEffect, useRef } from 'react';
import api from '../../services/api.js';
import Button from '../../components/button/Button.jsx';
import Card from '../../components/card/Card.jsx';
import './home.scss';

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  async function get_users() {
    const api_data = await api.get('/users');
    setUsers(api_data.data);
  }

  useEffect(() => {
    get_users();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.lastname) newErrors.lastname = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  async function post_users(e) {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    await api.post('/users', formData);
    get_users();
  }

  return (
    <main className='container-home'>
      <section className='home-box'>
        <article className='box-text'>
          <h1 id='title'>
            Learn to code by<br />
            watching others
          </h1>
          <p id='text'>
            See how experienced developers solve problems in real-time.<br />
            Watching scripted tutorials is great, but understanding how<br />
            developers think is invaluable.
          </p>
        </article>

        <article className='box-input'>
          <Button id='btn-purple' texto='Try it free for 7 days' tag='then $20/mo. thereafter' />

          <form id='box-form' onSubmit={post_users}>
            <fieldset className='form'>
              <input
                className={`${errors.name ? 'error' : ''}`}
                placeholder={errors.name ? errors.name : 'Name'}
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className='form'>
              <input
                className={`${errors.name ? 'error' : ''}`}
                placeholder={errors.name ? errors.lastname : 'Lastname'}
                type='text'
                name='lastname'
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className='form'>
              <input
                className={`${errors.name ? 'error' : ''}`}
                placeholder={errors.name ? errors.email : 'Email Address'}
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className='form'>
              <input
                className={`${errors.name ? 'error' : ''}`}
                placeholder={errors.name ? errors.password : 'password'}
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className="form" style={{ margin: '0' }}>
              <Button func={post_users} id='btn-gree' texto='CLAIM YOUR FREE TRIAL' />
              <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
            </fieldset>
          </form>
        </article>
      </section>

      <section className='box-card'>
        <Card data={users} get_func={get_users} />
      </section>
    </main>
  );
}

export default App;
















// // React Config
// import React from 'react'
// import { useState, useEffect, useRef } from 'react';
// import api from '../../services/api.js';

// // Components
// import Button from '../../components/button/Button.jsx';
// import Card from '../../components/card/Card.jsx';

// // Styles
// import './home.scss';

// function App() {
//   const [users, setUsers] = useState([]);

//   async function get_users(){
//     const api_data = await api.get('/users');

//     setUsers(api_data.data);
//   }

//   useEffect(() => {
//     get_users();
//   }, []);


//   const input_name = useRef();
//   const input_lastname = useRef();
//   const input_email = useRef();
//   const input_password = useRef();
  

//   async function post_users(){
//     await api.post('/users', {
//       name: input_name.current.value,
//       lastname: input_lastname.current.value,
//       email: input_email.current.value,
//       password: input_password.current.value,
//     });

//     get_users();
//   }

//   return (
//     <main className='container-home'>
//       <section className='home-box'>
//         <article className='box-text'>
//           <h1 id='title'>
//             Learn to code by<br />
//             watching others
//           </h1>
//           <p id='text'>
//             See how experienced developers solve problems in real-time.<br />
//             Watching scripted tutorials is great, but understanding how<br />
//             developers think is invaluable.
//           </p>
//         </article>

//         <article className='box-input'>
//           <Button id='btn-purple' texto='Try it free for 7 days' tag='then $20/mo. thereafter' />

//           <form id='box-form'>
//             <fieldset className="form">
//               <input placeholder='Name' type='text' ref={input_name} required />
//             </fieldset>

//             <fieldset className="form">
//               <input placeholder='Last Name' type='text' ref={input_lastname} required />
//             </fieldset>

//             <fieldset className="form">
//               <input placeholder='Email Adderss' type='email' ref={input_email} required />
//             </fieldset>

//             <fieldset className="form">
//               <input placeholder='Password' type='password' ref={input_password} required />
//             </fieldset>

//             <fieldset className="form" style={{ margin: '0' }}>
//               <Button func={post_users} id='btn-gree' texto='CLAIM YOUR FREE TRIAL' />
//               <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
//             </fieldset>
//           </form>
//         </article>
//       </section>

//       <section className='box-card'>
//         <Card data={ users } get_func={ get_users } />
//       </section>
//     </main>
//   );
// }

// export default App;


