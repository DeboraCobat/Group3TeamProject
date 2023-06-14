import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import styles from '../styles/LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    setError(null);
    signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log("Success. The user is created in firebase");
        router.push('/home-page-logged');
      })
      .catch((error) => {
        setError(error.message);
      });
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          {error && <div className={styles.alert}>{error}</div>}
          <div className={styles.formGroup}>
            <label htmlFor="loginEmail">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              name="email"
              id="loginEmail"
              placeholder="Email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              id="loginPassword"
              placeholder="Password"
            />
          </div>
          <div className={styles.formGroup}>
            <button className={styles.button}>Login</button>
            {/* <button className={styles.button} onClick={signInWithGoogle}>Sign in with Google</button> */}
            {/* <Link href="/forgot_password">
              <a>Forgot Password?</a>
            </Link> */}


          </div>
          <div className={styles.formGroup}>
            <p>
              No account? <Link href="/sign_up">Create one!</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
