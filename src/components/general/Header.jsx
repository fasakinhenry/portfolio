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
    <div className="fixed w-full transparent backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Fasakin Henry</h2>
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
