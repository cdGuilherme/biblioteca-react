import foto from '/foto.png';
import bird from '/bird.gif';

export default function Desenvolvedor() {
  return (
    <div className="bg-white">

      {/* flex h-screen flex-col utilizados para centralizar verticalmente a foto */}
      <div className="flex h-screen flex-col mx-auto p-8 w-full max-w-[1024px] min-h-screen bg-white">
        <h1 className="text-[16px]">Desenvolvedor</h1>
        {/* https://stackoverflow.com/questions/63412303/how-to-make-div-fill-full-height-of-parent-in-tailwind
        Usage of flex-1 is optimal for your solution to expand a certain component in the parent:
        Use flex-1 to allow a flex item to grow and shrink as needed, ignoring its initial size: */}
        <div className="flex-1 content-center">
          <img className="mx-auto rounded-full size-64" src={foto} alt="foto" />
          <br />
          <p className="text-center">Olá 👋 eu sou</p>
          <h2 className="text-center text-[32px] font-semibold">Guilherme Costa</h2>
        </div>
      </div>

      <div className="mx-auto p-8 w-full max-w-[1024px] bg-white">
        <h3 className="text-[24px] font-semibold">Sobre mim</h3>
        <ul className="list-disc list-inside">
          <li>Estudante de Desenvolvimento de Software Multiplataforma na FATEC</li>
          <li>Técnico em Informática para Internet na ETEC</li>
          <li>Experiência com Linux</li>
          <li>Interesse em aprender e aprimorar meu conhecimento em desenvolvimento fullstack</li>
          <li>Possuo inglês avançado</li>
        </ul>
      </div>

      <div className="mx-auto p-8 w-full max-w-[1024px] bg-white">
        <h3 className="text-[24px] font-semibold">Formação</h3>
        <ul className="list-disc list-inside">
          <li>Ensino Superior: Desenvolvimento de Software Multiplataforma - Fatec Votorantim Benedicto Pagliato</li>
          <li>Ensino Técnico: Informática para Internet - Etec Prof. Elias Miguel Junior</li>
        </ul>
      </div>

      <div className="mx-auto p-8 w-full max-w-[1024px] bg-white">
        <h3 className="text-[24px] font-semibold">Projetos</h3>
        <br />

        <div className="mx-auto max-w-lg">
          <img className="w-full object-contain aspect-4/3" src={bird} alt="bird" />
          <div>
            <h4 className="text-center text-[20px] font-semibold mt-2 mb-2">not flappy bird</h4>
            <p className="text-justify">
              Jogo inspirado em Flappy Bird usando a linguagem de programação Lua na engine do pico8, um console de
              videogame fantasia. Inclui a gameplay inspirada no jogo com um mapa que gera aleatóriamente conforme você
              joga, dificuldade que aumenta conforme você joga, 4 skins diferentes, suporte a touchscreen, e multiplas telas
              com a utilização de state machine.
            </p>
            <br />
            <a className="bg-blue-500 text-white py-2 px-5 no-underline rounded-xl" target="_blank" href="https://github.com/cdGuilherme/pico8-carts">Acessar</a>
          </div>
        </div>

      </div>

    </div>
  );
}