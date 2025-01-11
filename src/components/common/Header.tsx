import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// import { ModeToggle } from "@/components/ModeToggler";

const Header = () => {
  const navigate=useNavigate()
  const routes = [
    { path: "/", title: "Home" },
    // { path: "/:id", element: <EmailDetail />, title: "Email Detail" },
    { path: "privacy-policy",  title: "Privacy Policy" },
    { path: "faqs", title: "FAQs" },
    { path: "termsservices", title: "Terms of Service" },
    { path: "blog",  title: "Blog" },
    { path: "contactus",  title: "Contact Us" },
  ];
  
  return (
    <header className="border-b bg-background text-foreground flex justify-between items-center w-full px-5">
        <img src="/image.png" alt="logo" />
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            {routes.map(
              (item) => (
                <li key={item.path} className="bg-background  text-foreground rounded-md ">
                  <Button
                    variant="ghost"
                    className="text-foreground hover:text-primary font-bold capitalize"
                    onClick={()=>navigate(`/${item.path}`)}
                  >
                    {item.title}
                  </Button>
                </li>
              )
            )}
          </ul>
        </nav>
        {/* <ModeToggle /> */}
      </div>
    </header>
  );
};

export default Header;
