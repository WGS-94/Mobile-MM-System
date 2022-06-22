import React, { createContext, useCallback, useState, useContext } from "react";
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)

  const [data, setData] = useState(() => {
    const token = AsyncStorage.getItem("@mmsystem:token");
    const user = AsyncStorage.getItem("@mmsystem:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { user: JSON.parse(user), token };
    }

    return {};
  });

  // Lógica para deslogar users com tokens expirados
  const token = data.token

  if (token) {
    let decodedToken = jwt_decode(token);
    let currentDate = new Date();
  
    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      AsyncStorage.clear();
  
      setData({});
    } else {
      console.log("Valid token");   
    }

  }

  const signIn = useCallback(async ({ email, password }) => {
    setLoading(true)
    const response = await api.post("sessions", {
      email,
      password,
    });

    const { user } = response.data;

    AsyncStorage.setItem("@mmsystem:token", token);
    AsyncStorage.setItem("@mmsystem:user", JSON.stringify(user));
    AsyncStorage.setItem("@mmsystem:userID", user._id);
    setLoading(false)
    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ user, token });
  }, [token]);

  const signOut = useCallback(() => {
    AsyncStorage.removeItem("@mmsystem:token");
    AsyncStorage.removeItem("@mmsystem:user");
    AsyncStorage.clear();

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        loading,
        setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
