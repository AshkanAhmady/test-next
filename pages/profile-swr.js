import axios from "axios";
import useSWR from "swr";

const fetcher = async () => {
  const { data } = await axios.get("http://localhost:4000/profile");
  return data;
};

//   if we want use then catch
//   ........................
// const fetcher = () => {
//   return axios.get("http://localhost:4000/profile").then((res) => res.data);
// };

const ProfileSWR = () => {
  const { data, error } = useSWR("getUserData", fetcher);

  if (error) return <p>faild to load!</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile Page</h2>
      <div>
        <h3>
          name: {data.name} -- transactions: {data.transactions}
        </h3>
      </div>
    </div>
  );
};

export default ProfileSWR;
