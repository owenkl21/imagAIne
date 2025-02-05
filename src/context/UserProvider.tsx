"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client"; // Import client-side Supabase


interface UserContextType {
  user: { name: string; email: string } | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  useEffect(() => {
    const supabase = createClient(); // ✅ Client-side Supabase instance

    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) {
        setUser({
          name: data.user.user_metadata?.full_name || "User",
          email: data.user.email || "",
        });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

// Hook to use user data anywhere
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
