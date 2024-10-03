import Image from "next/image";
import JokeCard from '../app/components/JokeCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <JokeCard />
    </main>
  );
}
