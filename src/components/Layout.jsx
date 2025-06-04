import Footer from './Footer';
import Navbar from './NavBar';


const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </>
);

export default Layout;

