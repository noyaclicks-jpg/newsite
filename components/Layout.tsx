import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <Chatbot />
    </>
  );
}
