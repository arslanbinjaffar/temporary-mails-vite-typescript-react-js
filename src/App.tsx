import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import EmailDetail from "./pages/email/detail/Details";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import PrivacyPolicy from "./pages/privacypolicy";
import Contactus from "./pages/contactus";
import Blog from "./pages/blog";
import TermsOfService from "./pages/termsservices";
import Faqs from "./pages/faqs/index";

const routes = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/:id", element: <EmailDetail />, title: "Email Detail" },
  { path: "/privacy-policy", element: <PrivacyPolicy />, title: "Privacy Policy" },
  { path: "/faqs", element: <Faqs />, title: "FAQs" },
  { path: "/termsservices", element: <TermsOfService />, title: "Terms of Service" },
  { path: "/blog", element: <Blog />, title: "Blog" },
  { path: "/contactus", element: <Contactus />, title: "Contact Us" },
];

const App = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
