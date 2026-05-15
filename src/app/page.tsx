import { Board } from "@/widgets/board";
import { Header } from "@/widgets/header";
import { Subheader } from "@/widgets/subheader";

export default function Home() {
  return (
    <>
      <Header />
      <Subheader />
      <main>
        <Board />
      </main>
    </>
  );
}
