import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "/image.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { path: "/", title: "Home" },
    { path: "privacy-policy", title: "Privacy Policy" },
    { path: "faqs", title: "FAQs" },
    { path: "termsservices", title: "Terms of Service" },
    { path: "blog", title: "Blog" },
    { path: "contactus", title: "Contact Us" },
  ];

  return (
    <header className="border-b bg-background text-foreground w-full px-5 ">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <img src={logo} alt="logo" className="h-8 w-auto" />

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            {routes.map((item) => (
              <li key={item.path}>
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary font-bold capitalize"
                  onClick={() =>
                    navigate(
                      item.path.startsWith("/") ? item.path : `/${item.path}`
                    )
                  }
                >
                  {item.title}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b z-[999999999]">
            <nav className="container mx-auto py-4">
              <ul className="flex flex-col space-y-2">
                {routes.map((item) => (
                  <li key={item.path}>
                    <Button
                      variant="ghost"
                      className="w-full text-left text-foreground hover:text-primary font-bold capitalize"
                      onClick={() => {
                        navigate(
                          item.path.startsWith("/")
                            ? item.path
                            : `/${item.path}`
                        );
                        setIsOpen(false);
                      }}
                    >
                      {item.title}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
