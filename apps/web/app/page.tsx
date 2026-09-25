import { Button } from "@portfolio/ui/button";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-6 bg-background">
      <h1 className="text-display-hero">Welcome Home</h1>
      <Button size="lg">Get started</Button>
    </div>
  );
}
