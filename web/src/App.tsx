import styles from './Sass/App.module.scss';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { useContext } from 'react';
import { AuthContext } from './context/Auth';
import { SendMessageForm } from './components/SendMessageForm';

export function App() {
  const { user } = useContext(AuthContext); 
  return (
   <main className={styles.contentWrapper}>
     <MessageList/>
     { !! user ? <SendMessageForm /> : <LoginBox/> }
   </main>
  )
}