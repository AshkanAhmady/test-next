import Link from "next/link";

const HomePage = () => {

  return ( 
    <div>
      <h1>Home Page</h1>
      <Link href="/users">
        <a>go to users page</a>
      </Link>
      <hr/>
      <Link href="/episodes">
        <a>go to episodes page</a>
      </Link>
      <hr/>
      <Link href="/products">
        <a>go to products page</a>
      </Link>
    </div>
   );
}
 
export default HomePage;