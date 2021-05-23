import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h3>OOPS....</h3>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
