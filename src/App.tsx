import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Mi Página de Práctica React</h1>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main className="main">
        <section id="inicio">
          <h2>Bienvenido</h2>
          <p>Esta es una página de práctica hecha con React y Vite. Puedes modificar el contenido fácilmente.</p>
        </section>

        <section id="sobre">
          <h2>Sobre mí</h2>
          <p>Soy un desarrollador en proceso de aprendizaje de React. Este es mi primer sitio con componentes funcionales.</p>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
          <p>Puedes contactarme en: <strong>correo@ejemplo.com</strong></p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Mi Página React</p>
      </footer>
    </div>
  );
}

export default App;

