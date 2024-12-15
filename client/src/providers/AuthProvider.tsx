import React, { useContext, createContext, ReactNode } from "react";

// Define the shape of the authentication context value
interface AuthContextType {
  // Define the properties and methods that will be provided in the context
  user: Record<string, string> | null
}

// Create the AuthContext with a default value of null
const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const authValue: AuthContextType = {
    // Initialize your context value here
    user: {}
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
