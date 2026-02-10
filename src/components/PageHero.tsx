import { Link } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
  highlight?: string;
  breadcrumb?: string;
}

const PageHero = ({ title, subtitle, highlight, breadcrumb }: Props) => {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-hero">
      <div className="container mx-auto px-6 lg:px-8">
        {breadcrumb && (
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{breadcrumb}</span>
          </div>
        )}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-navy leading-tight tracking-tight max-w-3xl">
          {highlight ? (
            <>
              {parts[0]}
              <span className="text-gradient-cyan">{highlight}</span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </h1>
        <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHero;
