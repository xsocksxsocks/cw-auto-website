import Layout from "@/components/Layout";

const Impressum = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-6 text-3xl font-bold text-foreground">Impressum</h1>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
          <p className="text-muted-foreground">
            CW Auto Export Service UG (haftungsbeschränkt)<br />
            Inhaber: Peter Schulz<br />
            Buchinger Str. 17<br />
            86159 Augsburg
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-foreground">Handelsregister</h2>
          <p className="text-muted-foreground">
            Amtsgericht Augsburg<br />
            HRB 23976
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-foreground">Kontakt</h2>
          <p className="text-muted-foreground">
            E-Mail: info@cwautoexport.com<br />
            Telefon: Auf Anfrage
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="text-muted-foreground">
            Peter Schulz<br />
            Buchinger Str. 17<br />
            86159 Augsburg
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-foreground">Haftungsausschluss</h2>
          <h3 className="mb-1 font-semibold text-foreground">Haftung für Inhalte</h3>
          <p className="mb-3 text-sm text-muted-foreground">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
          <h3 className="mb-1 font-semibold text-foreground">Haftung für Links</h3>
          <p className="text-sm text-muted-foreground">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Impressum;
