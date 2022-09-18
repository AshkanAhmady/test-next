import axios from "axios";
import { useRouter } from "next/router";

const EpisodesList = ({ episode }) => {
  const router = useRouter();

  //   when we use (fallback: true)
  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>
        Name: {episode.name} - air_date: {episode.air_date}
      </h1>
    </div>
  );
};

export default EpisodesList;

export async function getStaticPaths() {
  //   const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
  //   const paths = data.results.map((episode) => {
  //     return {
  //       // episode.id => alwais must be string
  //       params: { episodeId: `${episode.id}` },
  //     };
  //   });

  return {
    paths: [
      { params: { episodeId: "1" } },
      { params: { episodeId: "2" } },
      { params: { episodeId: "3" } },
    ],
    fallback: true,
  };
}

// this method is run for all dynamiyc pages
export async function getStaticProps(context) {
  const { params } = context;
  //   this is singleEpisode
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode/${params.episodeId}`
  );

  //   most have return
  return {
    //   one of keys for this object must be (props)
    props: {
      episode: data,
    },
  };
}
