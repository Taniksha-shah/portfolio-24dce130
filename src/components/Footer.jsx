function Footer({ name }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="glass-panel footer-panel">
        <p className="mono-line footer-text">
          © {year} {name} <span className="dim">/ built with React + Vite</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;