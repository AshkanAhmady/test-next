const User = ({ user }) => {
  return (
    <div key={user.id}>
      Name: {user.name} - species: {user.species}
    </div>
  );
};

export default User;
