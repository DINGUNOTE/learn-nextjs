import Image from 'next/image';
import SEO from '../components/SEO';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`, // 이 URL로 마스킹해서 다른 정보들은 URL에 보이지 않게 한다.
    );
  };
  return (
    <div className="container">
      <SEO title="Home" />
      {results?.map(movie => (
        <Link
          href={{
            pathname: `/movies/${movie.original_title}/${movie.id}`,
          }}
          key={movie.id}
        >
          <a>
            <div className="movie">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={750}
                style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />

              <h4>{movie.title}</h4>
            </div>
          </a>
        </Link>
      ))}
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie {
            height: 100%;
            border-radius: 0 0 12px 12px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            cursor: pointer;
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
            word-break: keep-all;
          }
        `}
      </style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch('http://localhost:3000/api/movies')
  ).json();
  return {
    props: {
      results,
    },
  };
}
