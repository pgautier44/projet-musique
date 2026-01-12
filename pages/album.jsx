import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Track from '../src/components/Track/Track';
import { lyrics } from '../data/lyrics';

export default function Album() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main>
        <section style={{ padding: '80px 2rem 40px', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 500,
              color: '#f5d6c6',
              letterSpacing: '0.04em',
              marginBottom: '10px'
            }}
          >
            Je t’ai promis
          </h1>

          <p style={{ opacity: 0.6, letterSpacing: '0.1em' }}>Big mucle by Brutus</p>
        </section>

        {/* Première piste */}
        <Track
          index="01"
          title="Diego"
          artist="Johnny Hallyday"
          year="1991"
          image="/images/JohnnyHallyday.png"
          audioOriginal="/musiques/Diego.mp3"
          audioCover="/musiques/DiegoMoi.mp3"
          lyrics={lyrics.diego}
          previewLength={200}
        />

        <Track
          index="02"
          title="Si j'étais président"
          artist="Gérard Lenorman"
          year="1980"
          image="/images/GerardLenorman.png"
          audioOriginal="/musiques/President.mp3"
          audioCover="/musiques/PresidentMoi.mp3"
          lyrics={lyrics.president}
          previewLength={200}
        />

        <Track
          index="03"
          title="Les lacs du connemara"
          artist="Michel Sardou"
          year="1981"
          image="/images/MichelSardou.png"
          audioOriginal="/musiques/Connemara.mp3"
          audioCover="/musiques/ConnemaraMoi.mp3"
          lyrics={lyrics.connemara}
          previewLength={200}
        />

        <Track
          index="04"
          title="Tout était dit"
          artist="Jean Jacques Goldman"
          year="1997"
          image="/images/JJGoldman.png"
          audioOriginal="/musiques/ToutEtaitDit.mp3"
          audioCover="/musiques/ToutEtaitDitFull.mp3"
          lyrics={lyrics.toutEtaitDit}
          previewLength={200}
        />

        <Track
          index="05"
          title="La marseillaise"
          artist="France"
          year=""
          image="/images/Marseillaise.png"
          audioOriginal="/musiques/Marseillaise.mp3"
          lyrics={lyrics.marseillaise}
          previewLength={200}
        />

        <h1
            style={{
              fontSize: 'clamp(2.0rem, 5vw, 3.0rem)',
              fontWeight: 500,
              color: '#f5d6c6',
              letterSpacing: '0.04em',
              marginBottom: '10px',
              textAlign: 'center'
            }}
          >
            Chanson bonus : duo
          </h1>

          <Track
          index=""
          title="Je te promets"
          artist="Johnny Gautier"
          year="2020"
          image="/images/JohnnyGautier.png"
          audioCover="/musiques/JeTePromets.mp3"
          lyrics={lyrics.jeTePromets}
          previewLength={200}
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
