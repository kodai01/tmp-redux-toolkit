import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div>Hello World</div>
      <Link href="/about"> about</Link>
    </div>
  );
};

export default Home;
