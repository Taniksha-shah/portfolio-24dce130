function Header({ name, title }) {
  return (
    <header className="header">
      <div className="glass-panel header-panel">
        <p className="mono-line prompt-line">
          <span className="prompt-symbol">$</span> whoami
        </p>
        <h1 className="header-name">{name}</h1>
        <p className="mono-line comment-line"># {title}</p>
      </div>
    </header>
  );
}

export default Header;