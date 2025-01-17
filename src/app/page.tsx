"use client";

import ExchangeForm from "@/widgets/ExchangeForm/ExchangeForm";
import Header from "@/shared/Header/Header";
import Links from "@/widgets/Links";
import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram) {
      WebApp.ready();
      console.log(WebApp);
    }
  }, []);

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
