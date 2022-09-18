import axios from "axios";
import Link from "next/link";

const EpisodesList = ({ episodes }) => {
  return (
    <div>
      <h1>User List:</h1>
      <div>
        {episodes.results.map((episode) => {
          return (
            <div key={episode.id}>
              {/* passHref: => if we dont use (a) tag in Link */}
              <Link href={`/episodes/${episode.id}`}>
                <a>
                  <h2>
                    name: {episode.name} - episode: {episode.episode}
                  </h2>
                </a>
              </Link>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EpisodesList;

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");

  //   most have return
  return {
    //   one of keys for this object must be (props)
    props: {
      episodes: data,
    },
  };
}
