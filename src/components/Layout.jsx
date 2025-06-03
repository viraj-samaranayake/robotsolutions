import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </>
);

export default Layout;

