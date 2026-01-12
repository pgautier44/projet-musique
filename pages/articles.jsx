import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Article from '../src/components/Article/Article';

export default function Articles() {
  return (
    <>
      <Header />

      <main>
        <Article
          title="Libre dans sa tête"
          artist="Johnny Hallyday"
          year="1991"
          image="/images/Diego.png"
        >
          <p>
            Diego libre dans sa tête est une chanson écrite et composée par Michel Berger.
            Cette chanson est interprétée pour la première fois en 1981 par France Gall, sur son album studio Tout pour la musique.
            Cette chanson prend une signification particulière pour France Gall lors de son passage dans l'émission télévisée Champs-Élysées lorsqu'elle l'interprète pour la première fois en présence d'un ancien prisonnier politique, le pianiste argentin Miguel Ángel Estrella1,2 (juin 1984).
            Michel Berger l'enregistre sur son album studio Voyou en 1983 ; Johnny Hallyday reprend la chanson en 1990 et Véronique Sanson en 1999.
          </p>
        </Article>

        <Article
          title="Si j'étais président"
          artist="Gérard Lenorman"
          year="1980"
          image="/images/President.png"
        >
          <p>
            En 1980, Gérard Lenorman et Pierre Delanoé coécrivent la chanson « Si j’étais Président ».
            Valéry Giscard d’Estaing est au pouvoir, en attendant d’être remplacé le 10 mai 1981 par François Mitterrand et la crise pétrolière est installée depuis 1973.
            Dans un contexte économique de crise, le jeune chanteur de 35 ans se met à rêver qu’il est Président, et détaille ses mesures naïves et enfantines, qui plairaient aux enfants.
            Une chanson qui ne vieillit pas dans une ambiance sociale, économique et politique morose, sorte de bouffée d’air pur pour tous les gamins qui ont suivi ces dernières élections au travers de la télévision et des débats animés ou non, à la maison.
          </p>
        </Article>

        <Article
          title="Les lacs du Connemara"
          artist="Michel Sardou"
          year="1981"
          image="/images/Connemara.png"
        >
          <p>
            La chanson a été écrite et composée à Saint-Georges-Motel (Eure, France), dans la propriété de Michel Sardou.
            Ayant souffert de la chaleur à la suite d'un long voyage, le synthétiseur Sequential Prophet 10 de Jacques Revaux donnait un son proche d'une cornemuse, ce qui donna l'idée à Michel Sardou d'écrire une chanson écossaise.
            Comme ni lui, ni Pierre Delanoë ne connaissaient l'Écosse, Delanoë partit chercher de la documentation, ne trouva rien sur l'Écosse, mais revint avec un prospectus touristique sur l'Irlande et les lacs de Connemara, que Michel Sardou n'avait jamais visités.
          </p>
        </Article>

        <Article
          title="Tout était dit"
          artist="Jean Jacques Goldman"
          year="1997"
          image="/images/tout.png"
        >
          <p>
            Jean-Jacques Goldman, né le 11 octobre 1951 dans le 19e arrondissement de Paris, est un auteur-compositeur-interprète français, producteur et guitariste soliste de variété et de pop rock principalement.
            C'est principalement sa carrière solo qui lui permet de s'imposer comme l'un des chanteurs les plus populaires de sa génération, avec des titres comme Il suffira d'un signe (1981), Quand la musique est bonne (1982), Je te donne (1985) ou Là-bas (1987).
            De 1990 à 1995, il fait partie du trio Fredericks Goldman Jones avec le Franco-Gallois Michael Jones et l'Américaine Carole Fredericks, avant de reprendre une carrière solo, interrompue en 2003.
            En plus de ses propres chansons, Jean-Jacques Goldman écrit et compose pour de nombreux autres artistes, parmi lesquels Johnny Hallyday (album Gang) et Céline Dion (plusieurs collaborations dont D'eux, qui est l'album francophone le plus vendu à ce jour), mais aussi pour des bandes originales de films et génériques d'émissions télévisées.
          </p>
        </Article>

        <Article
          title="La marseillaise"
          artist="France"
          image="/images/hymne.png"
        >
          <p>
            La Marseillaise est un chant patriotique de la Révolution française adopté par la France comme hymne national :
            une première fois par la Convention pendant neuf ans du 14 juillet 1795 jusqu'à l'Empire en 1804, puis en 1879 sous la Troisième République1
          </p>
        </Article>

        <Article
          title="Je te promets"
          artist="Johnny Gautier"
          year="2020"
          image="/images/moi.png"
        >
          <p>
            C’est l’un des plus grands tubes de Johnny Hallyday.
            Ecrite par Jean-Jacques Goldman, cette chanson figure sur l’album Gang, qui est paru en 1986.
            Il s’agit bien sûr de Je te promets, l’un des titres les plus appréciés des fans du Taulier.
            Une chanson d’amour… qui a été écrite pour une femme en particulier : Adeline Blondieau
            Ce duo nous propose une nouvelle version de la chanson interprétée par la star Philippe Gautier.
          </p>
        </Article>
      </main>

      <Footer />
    </>
  );
}
