import './MentionsLegales.scss';

const MentionsLegales = () => {
  return (
    <section className="legal-wrapper">
      <div className="legal-container">
        <h2>Mentions légales</h2>

        <div>
          <h3>1. Informations générales</h3>
          <p>
            <strong>Responsable de la publication</strong> : Miquel Alexandre
          </p>
          <p>
            <strong>Contact</strong> : alexmiquel888@gmail.com
          </p>
        </div>

        <div>
          <h3>2. Hébergement</h3>
          <p>
            <strong>Hébergeur</strong> : GitHub Pages
          </p>
          <p>
            <strong>Adresse de l’hébergeur</strong> : 88 Colin P. Kelly Jr.
            Street, San Francisco, CA 94107, États-Unis
          </p>
        </div>
        <div>
          <h3>3. Responsabilité</h3>
          <p>
            Nous déclinons toute responsabilité quant aux erreurs ou omissions
            sur le site. Les informations fournies sont à titre indicatif et
            peuvent être modifiées sans préavis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentionsLegales;
