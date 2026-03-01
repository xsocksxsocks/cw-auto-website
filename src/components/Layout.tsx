import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const navItems = [
  { label: "Startseite", path: "/" },
  { label: "Impressum", path: "/impressum" },
  { label: "Datenschutz", path: "/datenschutz" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row">
          <Link to="/" className="text-xl font-bold text-primary">
            CW Auto Export Service
          </Link>
          <nav className="flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded px-3 py-2 text-sm transition-colors hover:bg-muted ${
                  location.pathname === item.path
                    ? "font-semibold text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold text-foreground">CW Auto Export Service UG</h3>
              <p className="text-sm text-muted-foreground">
                Ihr zuverlässiger Partner für Autohandel und Export in Augsburg.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-foreground">Kontakt</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> info@cwautoexport.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Auf Anfrage
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Buchinger Str. 17, 86159 Augsburg
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-foreground">Rechtliches</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link to="/impressum" className="text-muted-foreground hover:text-primary">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link to="/datenschutz" className="text-muted-foreground hover:text-primary">
                    Datenschutzerklärung
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-t pt-4 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} CW Auto Export Service UG. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
