// import { useState } from 'react';

// import { useDispatch } from 'react-redux';

// // import { setUser } from 'store/slises/userSlice';
// import { NavLink } from 'react-router-dom';
// import { Form } from 'components/Form/Form';
// import { logIn } from 'redux/auth/auth-slice';

// function Login() {
//     // const dispatch = useDispatch();

//     // const handleLogin = (email, password) => {
//     //     // const auth = getAuth();
//     //     console.log(email)

//     // }

//     return (
//         <Form
//             title='Login'
//             handleClick = {logIn}

//         />
//     )
// }
// export  {Login};
// function Login() {

//     const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//     const dispatch = useDispatch();

//     const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

//      const handleLogin = (email, password) => {
//     //   const auth = getAuth();
//         console.log(email)
//     }
//     return (

//         <Form
//             title='sign in'
//             handleClick = {handleLogin}

//         />
//     )
// }

// export default Login;
