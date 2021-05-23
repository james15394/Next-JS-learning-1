import Link from "next/link";

const NavBar = () => {
  return (
    <div className="nav">
      <h3 className="logo">
        <Link href="/">
          <a>TMDP</a>
        </Link>
      </h3>
      <div className="nav__items">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/movies">
          <a>Series</a>
        </Link>
        <Link href="/movies/popular">
          <a>Popular movies</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
