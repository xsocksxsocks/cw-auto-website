import Layout from "@/components/Layout";

const Datenschutz = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-6 text-3xl font-bold text-foreground">Datenschutzerklärung</h1>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="mb-1 font-semibold text-foreground">Allgemeine Hinweise</h3>
          <p className="text-sm text-muted-foreground">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            2. Verantwortliche Stelle
          </h2>
          <p className="text-sm text-muted-foreground">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            CW Auto Export Service UG (haftungsbeschränkt)<br />
            Inhaber: Peter Schulz<br />
            Buchinger Str. 17<br />
            86159 Augsburg<br /><br />
            E-Mail: info@cwautoexport.com
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            3. Datenerfassung auf dieser Website
          </h2>
          <h3 className="mb-1 font-semibold text-foreground">Server-Log-Dateien</h3>
          <p className="mb-3 text-sm text-muted-foreground">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="mb-3 list-inside list-disc text-sm text-muted-foreground">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            4. Kontaktaufnahme
          </h2>
          <p className="text-sm text-muted-foreground">
            Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
            Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
            weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
            DSGVO.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            5. Ihre Rechte
          </h2>
          <p className="text-sm text-muted-foreground">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
            Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
            Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
            Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
            jederzeit für die Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum Thema
            Datenschutz können Sie sich jederzeit an uns wenden.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Datenschutz;
