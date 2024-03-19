"use client";
import React, { useEffect, useState, createContext } from "react";
import netlifyIdentity from "netlify-identity-widget";
import { Next13ProgressBar } from "next13-progressbar";

// @ts-ignore
export const AuthContext: React.Context<{
  user: Object | null;
  login: () => void;
  logout: () => void;
}> = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Object | null>(null);

  useEffect(() => {
    netlifyIdentity.init();

    netlifyIdentity.on("init", (user) => {
      setUser(user);
      // setAuthReady(true);

    });

    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
      netlifyIdentity.close();
    });
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = {
    login,
    logout,
    user,
  };

  return (
    <AuthContext.Provider value={context}>
      {children}
      <Next13ProgressBar
        height='4px'
        color='#d8deff'
        options={{ showSpinner: true }}
        showOnShallow
      />
    </AuthContext.Provider>
  );
};

export default Providers;

