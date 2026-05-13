import { Button } from "@/shared/ui/button";
import { Header } from "@/widgets/header";
import { Subheader } from "@/widgets/subheader";

export default function Home() {
  return (
    <>
      <Header />
      <Subheader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to the Kanban Board!</h1>
        <div className="flex min-h-svh items-center justify-center">
          <Button>Click me</Button>
        </div>
        <p className="mt-4 text-lg text-gray-600">
          This is a mini Kanban board built with Next.js 16 and Tailwind CSS.
        </p>
      </main>
    </>
  );
}
