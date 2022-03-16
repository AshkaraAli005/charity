import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Post from './post.js';
import { db ,auth} from './firebase';
import { Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function App() {
  const classes = useStyles();
  const [modalStyle] =useState(getModalStyle);
  const [posts,setPosts]=useState([]);
  const [open,setOpen]=useState(false);
  const [openSignIn ,setOpenSignIn]=useState(false);
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [user, setUser]=useState('');
 
  useEffect(() =>{
   const unsubscribe= auth.onAuthStateChanged((authUser) => {
      if (authUser){
        console.log(authUser);
        setUser(authUser);
      }else{
        setUser(null);
      }
    })
    return () => {
      unsubscribe();
    }
  },[user,username])

  useEffect(()=>{ 
      db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map( doc =>({
        id:doc.id,
        post:doc.data()
      })));
    })
  },[]);
  const signUp=(event) =>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email ,password)
    .then((authUser) =>{
      return authUser.user.updateProfile({
        displayName:username
      })
    })
    .catch((error) => alert(error.message));
    setOpen(false);
  
  }
  const signIn =(event) =>{
    event.preventDefault();
    auth.signInWithEmailAndPassword(email , password)
    .catch((error) => alert(error.message))
  setOpenSignIn(false);
  }

  return (
    <div className="app">
    <div className='app__header'>

    </div>
   <Header/>
     <Modal
      open={open}
      onClose={()=>setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className='app_signup'>
          <center>
          </center>
          <Input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          />
          <Input
          type='text'
          placeholder='email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />
         <Input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
         <center><span> <Button onClick={signUp}>Sign UP..</Button></span></center>
          </form>
        </div>
        </Modal>
        <Modal
      open={openSignIn}
      onClose={()=>setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className='app_signup'>
         <Input
          type='text'
          placeholder='email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />
         <Input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
         <center><span> <Button onClick={signIn}>Sign In..</Button></span></center>
          </form>
          </div>
          </Modal>
        
     <center>
         {user ? (
           <Button onClick={() => auth.signOut()}>LogOut..</Button>
         ):(
        <div className="app_login container">
          <Button onClick={() =>setOpenSignIn(true)}>Sign In..</Button> 
             <Button onClick={() =>setOpen(true)}>Sign Up..</Button>
             </div>         
         
         )}
         </center> 
             {
       posts.map(({id,post}) => (
         <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
       ))
     }

    </div>
  );
}

export default App;
