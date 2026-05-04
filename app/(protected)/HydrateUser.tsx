"use client";

import { User, useUserStore, UserStore } from "@/store/user";
import { useEffect } from "react";

type Props = {
  user: User;
};

export default function HydrateUser({ user }: Props) {
  const setUser = useUserStore((state:UserStore) => state.setUser);

  useEffect(() => {
    setUser(user);
  }, [user, setUser]);

  return null;
}