
export default function Home() {
  return (
    
    <div className="page-wrapper">
      <section className="main-section">
        <header>
          <nav className="nav-top">
            <div className="nav--left">
                <img src="/logo-sem-fundo.png" id="logo" />
                <a href="">Sobre Nós</a>
                <select>
                    <option value={""} selected>Procurar por</option>
                    <option>Região</option>
                    <option>Raça</option>
                    <option>Idade</option>
                </select>
                <a href="#">Dicas</a>
                <a href="#">Abrigos</a>
                <a href="#">Pets Felizes</a>
            </div>
            <div className="nav--right">
                <button id="nav-sign">Sign Up</button>
                <button id="nav-login">Login</button>
          
            </div>
          </nav>
          <div className="main__container">
            <div className="main__container--left">
              <p className="container-name">Purrfect Pets</p>
              <h1>Encontre o seu melhor amigo!</h1>
              <div className="container-buttons">
                <button className="about">Saiba mais sobre</button>
                <button className="share">compartilhe</button>
              </div>
              <a href="#" className="container-sign">Ou inscreva-se</a>
            </div>
            <div className="main__container--right">
              <img src="/amico.svg" alt="desenho de dois personagens felizes tirando dois cachorros e um gato de uma caixa de adoção, e com varios corações ao redor. "/>
              
            </div>
          </div>

        </header>
      </section>
    </div>
    
  )
}
