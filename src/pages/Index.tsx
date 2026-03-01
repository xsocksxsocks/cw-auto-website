import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary px-4 py-16 text-center">
        <div className="container mx-auto">
          <img src={logo} alt="CW Auto Export Logo" className="mx-auto mb-4 h-20 w-auto brightness-0 invert" />
          <h1 className="mb-3 text-3xl font-bold text-primary-foreground sm:text-4xl">
            CW Auto Export Service
          </h1>
          <p className="mx-auto max-w-xl text-lg text-primary-foreground/80">
            Ihr zuverlässiger Partner für Autohandel und Export in Augsburg.
            Faire Preise und persönliche Beratung – seit Jahren Ihr Ansprechpartner.
          </p>
        </div>
      </section>

      {/* Über uns */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Über uns</h2>
          <p className="mb-4 text-muted-foreground">
            CW Auto Export Service UG ist ein familiengeführtes Unternehmen mit Sitz in Augsburg.
            Wir sind spezialisiert auf den An- und Verkauf sowie den Export von Gebrauchtwagen.
            Unser Ziel ist es, Ihnen einen schnellen, unkomplizierten und fairen Service zu bieten.
          </p>
          <p className="text-muted-foreground">
            Ob Sie Ihr Fahrzeug verkaufen möchten oder auf der Suche nach einem passenden
            Gebrauchtwagen sind – sprechen Sie uns an. Wir beraten Sie gerne persönlich.
          </p>
        </div>
      </section>

      {/* Leistungen */}
      <section className="bg-muted px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Unsere Leistungen</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Ankauf", desc: "Wir kaufen Ihr Fahrzeug schnell und zu fairen Konditionen." },
              { title: "Verkauf", desc: "Gebrauchtwagen in geprüftem Zustand zu günstigen Preisen." },
              { title: "Export", desc: "Professioneller Fahrzeugexport – zuverlässig und unkompliziert." },
            ].map((item) => (
              <div key={item.title} className="rounded-md border bg-background p-5">
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Kontakt</h2>
          <p className="mb-4 text-muted-foreground">
            Haben Sie Fragen oder möchten ein Angebot? Kontaktieren Sie uns gerne:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:info@cwautoexport.com" className="hover:text-primary">
                info@cwautoexport.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              Telefon auf Anfrage
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              Buchinger Str. 17, 86159 Augsburg
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
