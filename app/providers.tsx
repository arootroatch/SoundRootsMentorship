"use client";
import React, { useEffect, useState, createContext } from "react";
import netlifyIdentity from "netlify-identity-widget";
import { Next13ProgressBar } from "next13-progressbar";
import { ThemeProvider } from "next-themes";

// @ts-ignore
export const AuthContext: React.Context<{
  user: Object | null;
  login: () => void;
  logout: () => void;
  authReady: boolean;
}> = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Object | null>(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    netlifyIdentity.init();
    const currentUser = netlifyIdentity.currentUser();
    setUser(currentUser);
    setAuthReady(true);

    netlifyIdentity.on("login", (user) => {
      setUser(user);
      console.log("login", user);
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
    authReady,
  };

  return (
    <AuthContext.Provider value={context}>
      <ThemeProvider attribute='class'>
        {children}
        <Next13ProgressBar
          height='4px'
          color='#d8deff'
          options={{ showSpinner: true }}
          showOnShallow
        />
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export default Providers;
