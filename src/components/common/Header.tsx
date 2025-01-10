import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggler";

const Header = () => {
  return (
    <header className="border-b bg-background text-foreground flex justify-between items-center w-full px-5">
        <img src="" alt="logo" />
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            {["Home", "Blog", "Articles", "About Us", "Contact Us"].map(
              (item) => (
                <li key={item} className="bg-background  text-foreground rounded-md">
                  <Button
                    variant="ghost"
                    className="text-foreground hover:text-primary "
                  >
                    {item}
                  </Button>
                </li>
              )
            )}
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
