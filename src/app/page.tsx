"use client";

import ExchangeForm from "@/widgets/ExchangeForm/ExchangeForm";
import Header from "@/shared/Header/Header";
import Links from "@/widgets/Links";
import Preloader from "@/widgets/Preloader";
import { useState } from "react";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <Header />
      <main className="container">
        <ExchangeForm />
        <Links />
      </main>
    </section>
  );
}
