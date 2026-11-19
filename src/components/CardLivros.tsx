// function CardLivros() {
//     return (
//         <div>
//             <article className="ml-8 flex gap-6 border-b border-gray-300 py-6">
//                 <div className="h-32 w-24 shrink-0 border-2 border-black">
//                     {/* Futuramente colocaremos a capa */}
//                 </div>
//                 <div>
//                     <h3 className="text-xl font-bold text-gray-900">1984</h3>
//                     <p className="mt-2 text-gray-600">George Orwell</p>
//                     <p className="mt-2 text-sm text-gray-500">Ficção Científica</p>
//                 </div>
//             </article>
//             <article className="ml-8  flex gap-6 border-b border-gray-300 py-6">
//                 <div className="h-32 w-24 shrink-0 border-2 border-black">
//                     {/* Futuramente colocaremos a capa */}
//                 </div>
//                 <div>
//                     <h3 className="text-xl font-bold text-gray-900">C Programming Language: ANSI C Version</h3>
//                     <p className="mt-2 text-gray-600"> Brian W. Kernighan, Dennis Ritchie</p>
//                     <p className="mt-2 text-sm text-gray-500">Programação</p>
//                 </div>
//             </article>
//             <article className="ml-8 flex gap-6 border-b border-gray-300 py-6">
//                 <div className="h-32 w-24 shrink-0 border-2 border-black">
//                     {/* Futuramente colocaremos a capa */}
//                 </div>
//                 <div>
//                     <h3 className="text-xl font-bold text-gray-900">Grokking Algorithms</h3>
//                     <p className="mt-2 text-gray-600">Aditya Bhargava</p>
//                     <p className="mt-2 text-sm text-gray-500">Programação</p>
//                 </div>
//             </article>
//             <article className="ml-8 flex gap-6 border-b border-gray-300 py-6">
//                 <div className="h-32 w-24 shrink-0 border-2 border-black">
//                     {/* Futuramente colocaremos a capa */}
//                 </div>
//                 <div>
//                     <h3 className="text-xl font-bold text-gray-900">Algoritmos e programação de computadores</h3>
//                     <p className="mt-2 text-gray-600">Dilermando Piva Junior, Francisco Bianchi</p>
//                     <p className="mt-2 text-sm text-gray-500">Programação</p>
//                 </div>
//             </article>
//         </div>
//     )
// }

// export default CardLivros

interface CardLivrosProps {
    titulo: string
    autor: string
    categoria: string
}

function CardLivros ({
    titulo,
    autor,
    categoria,
}: CardLivrosProps) {
    return (
        <article className="ml-8 flex gap-6 border-b border-gray-300 py-6">
            <div className="h-32 w-24 shrink-0 border-2 border-black">
                {/* Futuramente colocaremos a capa */}
            </div>
            <div>
                <h3 className="text-x1 font-bold text-gray-900">{titulo}</h3>
                <p className="mt-2 text-gray-600">{autor}</p>
                <p className="mt-2 text-sm text-gray-500">{categoria}</p>
            </div>
        </article>
    )
}

export default CardLivros