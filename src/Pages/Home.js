import React from "react";
import HeroSection from "../components/HeroSection";
import Layout from "../Layout/MainLayouts";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

export default function Home() {
  const cart = useSelector((state) => state.cart);

  return (
    <Layout>
      <HeroSection />
      <Footer />
    </Layout>
  );
}
