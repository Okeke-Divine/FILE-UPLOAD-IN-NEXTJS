import Link from "next/link";

const links = [
  { url: "/client", name: "Client Component (App Router)" },
  { url: "/server", name: "Server Component (App Router)" },
];

const Nav = () => {
  return (
    <>
      <nav className="bg-slate-100 px-10 py-2">
        {links.map((link, index) => (
          <div key={index}>
            <Link href={link.url}>{link.name}</Link>
          </div>
        ))}
      </nav>
    </>
  );
};

export default Nav;
