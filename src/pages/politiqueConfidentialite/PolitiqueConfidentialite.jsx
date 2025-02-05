import './PolitiqueConfidentialite.scss';

const PolitiqueConfidentialite = () => {
  return (
    <section className="confidentialite-wrapper">
      <div className="confidentialite-container">
        <h2>Politique de confidentialité</h2>
        <div>
          <h3>1. Collecte des données personnelles</h3>
          <p>
            Nous collectons des informations personnelles lorsque vous
            remplissez le formulaire sur le site, comme votre nom, adresse
            email, et toute autre information nécessaire à la gestion de vos
            demandes.
          </p>
        </div>

        <div>
          <h3>2. Utilisation des données</h3>
          <p>Les données collectées sont utilisées uniquement pour :</p>
          <ul>
            <li>Répondre à vos demandes.</li>
            <li>Améliorer l’expérience utilisateur sur notre site.</li>
          </ul>
        </div>

        <div>
          <h3>3. Partage des données</h3>
          <p>Nous ne partageons pas vos données avec des tiers.</p>
        </div>

        <div>
          <h3>4. Sécurité des données</h3>
          <p>
            Nous mettons en place des mesures techniques et organisationnelles
            pour protéger vos données contre tout accès non autorisé, altération
            ou destruction.
          </p>
        </div>

        <div>
          <h3>5. Vos droits</h3>
          <p>
            Conformément à la législation sur la protection des données, vous
            disposez des droits suivants :
          </p>
          <ul>
            <li>Droit d’accès et de rectification.</li>
            <li>Droit à l’effacement de vos données.</li>
            <li>Droit de vous opposer au traitement de vos données.</li>
          </ul>
          <p>
            Pour exercer vos droits, vous pouvez nous contacter à
            alexmiquel888@gmail.com.
          </p>
        </div>
        <div>
          <h3>6. Cookies</h3>
          <p>
            Le Site n’utilise pas de cookies pour la collecte de données. Aucun
            cookie n’est installé sur l’ordinateur de l’Utilisateur en dehors de
            ceux de la plateforme GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PolitiqueConfidentialite;
