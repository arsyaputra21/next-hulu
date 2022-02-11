import Head from "next/head";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Results from "../components/Results";
import requests from "../utils/request";
export default function Home(props) {
  const movieArray = props.results.results;
  return (
    <div>
      <Head>
        <title>Hola</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Nav />
      {/* Results */}
      <Results movieArray={movieArray} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return { props: { results: request } };
}
