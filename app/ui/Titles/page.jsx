export default function page({ location, children, className }) {
  switch (location) {
    case "herotop":
      return (
        <h2
          className={`font-extrabold text-6xl bg-clip-text
           text-transparent bg-gradient-to-r from-yellow-500 from-20%
           to-green-500 to-70%`}
        >
          {children}
        </h2>
      );

    case "fonctionality":
      return <h2>{children}</h2>;

    case "promotion":
      return <h2>{children}</h2>;

    default:
      return <h2>title not defined</h2>;
  }
}
