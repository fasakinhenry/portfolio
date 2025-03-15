import { Link } from "react-router-dom";

const Header = () => {
  const links = [
    "home",
    "skills",
    "experience",
    "projects",
    "socials",
    "contact",
  ];
  return (
    // Your header content here
    <div className="bg-blue-500">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <h2>Fasakin Henry</h2>
        {/* Navigation links */}
        <nav>
          <ul className="flex space-x-4">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={`#${link}`}
                  className="capitalize text-white hover:underline"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          </nav>
      </div>
    </div>
  );
};

export default Header;
