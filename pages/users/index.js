import axios from "axios";
import User from "../../Components/User";

const UserList = ({ userList }) => {
  return (
    <div>
      <h1>User List:</h1>
      <div>
        {userList.results.map((char) => {
          return <User key={char.id} user={char} />;
        })}
      </div>
    </div>
  );
};

export default UserList;

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");

  //   most have return
  return {
    //   one of keys for this object must be (props)
    props: {
      userList: data,
    },
  };
}
