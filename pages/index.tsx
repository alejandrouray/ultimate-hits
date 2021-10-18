import React from 'react';
import { Genre } from 'utils/types';
import Link from 'next/link';
import Button from '@/atoms/Button/Button';

interface HomeProps {
  genres: Array<Genre>;
}

const Home = (props: HomeProps) => {
  const { genres } = props;

  return (
    <div>
      <h1 className="bg-red-400">My Todo List</h1>
      <h2>Click On Todo to see it individually</h2>
      {genres.map(({ _id: id, title }) => (
        <div key={id}>
          <Link href={`/todos/${id}`}>
            <h3 style={{ cursor: 'pointer' }}>{title}</h3>
          </Link>
        </div>
      ))}
      <Button label="Prueba" primary />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(process.env.API_URL as string);
  const genres = await res.json();

  return {
    props: { genres },
  };
}

export default Home;
