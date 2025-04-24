import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './login.css'
const Login = ({ setLoginUser}) => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        username:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // const login = () => {
    //     axios.post("http://localhost:3001/login", user)
    //     .then(res => {
    //         setLoginUser(res.data.user)
    //         console.log("send");
    //         navigate("/")
    //     })
    // }

    const login = () => {
        axios.post("http://localhost:3001/login", user)
        .then(res => {
            if (res.data.user) {
                setLoginUser(res.data.user);
                localStorage.setItem("user", JSON.stringify(res.data.user)); // Save to localStorage
                navigate("/");
            }
        });
    };
   

    return (
        <div className="anil">
       {/*  <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Auto-Surgery
          </Typography>
          <Button> About us</Button>
        </Toolbar>
    </AppBar> */}
        <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
        
        <div className="login">
              <p className="greet">Welcome-back!!</p>
              <p>Please enter your details</p>
            <h1 className="log">Login</h1>
            <TextField
                variant="outlined"
                color="primary"
                type="text"
                label="Username"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="uname"
            /><br/><br/>
            <TextField
                variant="outlined"
                color="primary"
                type="password"
                label="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
            /> <br/><br/>
            <Button className='normal' variant="contained" color="primary" onClick={login}>
                Login
            </Button>
            <div className="bottom">
            <p className="caution">Don't have an account  don't worry click here to create account </p>
            <Button variant="contained" color="success" onClick={() => navigate("/signup")} >
                SignUp
            </Button>
            </div>
            </div>
        </Box>
        </div>
    )
}

export default Login;