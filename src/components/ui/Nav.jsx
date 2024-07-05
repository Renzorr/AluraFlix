import Link from "../Link/Link";

function Nav() {
  return (
    <header className="border-b-4 border-b-blue">
      <nav className="container flex items-center justify-between py-10 tablet:justify-center">
        <a href="/" className="tablet:hidden">
          <img src="/img/logo.png" alt="aluraflix logo" />
        </a>
        <div className="flex gap-10">
          <Link name="Inicio" href="/" color="blue" />
          <Link name="Crear Video" href="Create" color="white" />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
