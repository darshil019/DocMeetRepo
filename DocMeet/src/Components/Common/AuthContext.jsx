import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let navigate = useNavigate()

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    //why this useEffect run bcz after login we set userName but after refresh page token is already
    //in localstorage and with token userLoggedIn becomes true so logout button works good but userName
    //goes null that's why on useEffect we have to reset userData in using setUserData...
    useEffect(() => {
      const token = localStorage.getItem("token");
      const isLoggedIn = localStorage.getItem("token") !== null;
      setUserLoggedIn(isLoggedIn);

      if (token && !userData) {
        axios
          .get("http://localhost:5001/docmeet/user/dashboardName", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setUserData(res.data.user);
          })
          .catch((err) => {
            console.error("Error fetching user data on load", err);
            logout();
            navigate('/user/signin');
          });
      }
    }, [userData]);

    const login = async (token) => {
      localStorage.setItem('token', token)
      setUserLoggedIn(true)
      try {
        const res = await axios.get("http://localhost:5001/docmeet/user/dashboardName", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(res.data.user);
        navigate('/user/dashboard');
      } catch (error) {
        console.error("Failed to fetch user data during login", error);
      }
    };
  
    const logout = () => {
        localStorage.removeItem('userLoggedIn')
        localStorage.removeItem('token')
        setUserLoggedIn(false)
        setUserData(null)
    };
  
    return (
      <AuthContext.Provider value={{ userLoggedIn, setUserLoggedIn, logout ,login,userData,setUserData}}>
        {children}
      </AuthContext.Provider>
    );
  };