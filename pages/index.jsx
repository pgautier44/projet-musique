import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>Bienvenue sur le projet musique !</h2>
        <p>Contenu de la page ici...</p>
      </main>
      <Footer />
    </>
  );
}
