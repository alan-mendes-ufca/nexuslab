import Link from "next/link";

export default function Home() {
  return (
    <div className="site">
      <header>
        <Link className="brand" href="/" aria-label="Nexuslab, início"><span aria-hidden="true">n.</span> nexuslab</Link>
        <span className="note">Ideias ganham forma aqui.</span>
      </header>
      <main>
        <p className="eyebrow">● O próximo passo começa agora</p>
        <h1>Grandes ideias.<br /><span>Um começo simples.</span></h1>
        <p className="intro">Um espaço para criar, experimentar e construir o que vem a seguir. Sua próxima ideia já tem um lugar para começar.</p>
        <div className="actions">
          <a className="button" href="#base">Conheça a base <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="https://nextjs.org/docs" target="_blank" rel="noreferrer">Documentação Next.js ↗</a>
        </div>
        <section id="base" aria-labelledby="base-title">
          <div className="section-heading"><h2 id="base-title">O essencial, bem feito.</h2><span>01 — A base</span></div>
          <div className="features">
            <article><span className="number">01</span><h3>Simples por princípio</h3><p>Uma estrutura enxuta, fácil de entender e pronta para evoluir com suas ideias.</p></article>
            <article><span className="number">02</span><h3>Feito para toda tela</h3><p>Uma experiência leve e responsiva, do celular ao desktop.</p></article>
            <article><span className="number">03</span><h3>Pronto para o próximo passo</h3><p>Next.js e TypeScript como ponto de partida para construir com confiança.</p></article>
          </div>
        </section>
      </main>
      <footer><span>Nexuslab</span><span>Menos complexidade. Mais possibilidades.</span></footer>
    </div>
  );
}
