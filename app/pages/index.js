import Head from 'next/head';
import JokeCard from '../components/JokeCard';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Random Joke Extension</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <JokeCard />
    </div>
  );
}
