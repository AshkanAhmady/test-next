import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/profile")
      .then((res) => {
        setLoading(false);
        setUserData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error.length !== 0) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Profile Page</h2>
      <div>
        <h3>
          name: {userData.name} -- transactions: {userData.transactions}
        </h3>
      </div>
    </div>
  );
};

export default Profile;
