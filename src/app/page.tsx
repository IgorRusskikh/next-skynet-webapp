import ExchangeForm from "@/widgets/ExchangeForm/ExchangeForm";
import Header from "@/shared/Header/Header";
import Links from "@/widgets/Links/Links";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <ExchangeForm />
        <Links />
      </main>
    </>
  );
}
