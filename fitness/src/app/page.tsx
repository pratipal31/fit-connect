import HomePage from "../components/HomePage";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import Login from "@/components/login";
import Signup from "@/components/signup";

export default function Home() {
  return (
    <>
      <HomePage />

      {/* <Login />
      <Signup /> */}
    </>
  );
}
