import React from "react";
import HeroSection from "../components/HeroSection";
import Layout from "../Layout/MainLayouts";
import { useSelector } from "react-redux";

export default function Home() {
  const cart = useSelector((state) => state.cart);

  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
}
