export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card transition-theme mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 px-4 md:flex-row md:h-16">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Community Waste Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
