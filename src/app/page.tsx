import { Container } from "@/shared/ui/container";
import { Board } from "@/widgets/board";
import { Subheader } from "@/widgets/subheader";

export default function Home() {
  return (
    <Container>
      <Subheader />
      <Board />
    </Container>
  );
}
