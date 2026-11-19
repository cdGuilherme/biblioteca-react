// import { useEffect, useState } from 'react';

// // componentes da estrutura da página
// function Header() {
//   return <header>Header</header>;
// }

// function Content() {
//   return <main>Conteúdo</main>;
// }

// function Footer() {
//   return <footer>Footer</footer>;
// }

// // Componente para renderização condicional
// function Dashboard() {
//   return <h1>Dashboard</h1>;
// }

// function Login() {
//   return <h1>Login</h1>;
// }
// const authenticated = false;

// let page;
// if (authenticated) {
//   page = <Dashboard />;
// } else {
//   page = <Login />;
// }

// type Aluno = {
//   id: number;
//   name: string;
//   img?: string;
// };

// const avatarPadrao = 'https://randomuser.me/api/portraits/lego/0.jpg';

// const listaAlunos: Aluno[] = [
//   {
//     id: 1,
//     name: 'Aluno1',
//     img: 'https://randomuser.me/api/portraits/men/1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Aluno2',
//     img: 'https://randomuser.me/api/portraits/men/2.jpg',
//   },
//   {
//     id: 3,
//     name: 'Aluno3',
//     img: 'https://randomuser.me/api/portraits/men/3.jpg',
//   },
//   { id: 4, name: 'Aluno4' }, // Sem imagem, usará o avatar padrão
// ];

// export default function App() {
//   const [contador, setContador] = useState(0);
//   const [segundos, setSegundos] = useState(10);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSegundos((current) => {
//         if (current <= 1) {
//           clearInterval(interval);
//           return 0;
//         }
//         return current - 1;
//       });
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   function adicionar() {
//     setContador(contador + 1);
//   }

//   function subtrair() {
//     setContador(contador - 1);
//   }

//   return (
//     <>
//       <div>
//         <h1>Contador: {contador}</h1>
//         <button onClick={adicionar}>Adicionar +1</button>
//         <button onClick={subtrair}>Subtrair -1</button>
//       </div>

//       <div>
//         <h2>Cronômetro</h2>
//         <p>{segundos}</p>
//       </div>

//       {page}
//       <Header />
//       <Content />
//       <Footer />

//       <ul>
//         {listaAlunos.map((aluno) => (
//           <li key={aluno.id}>
//             <img src={aluno.img || avatarPadrao} alt={aluno.name} />
//             <p>{aluno.name}</p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// // https://stackblitz.com/edit/vitejs-vite-7synqxhy?file=src%2FApp.tsx,src%2FSaudacao.tsx,index.html