import { useState, useEffect } from "react";

export default function Estudos() {
	// 1500 segundos = 25 minutos
	const segundosInicial = 1500;

	// states usados pelo react
	const [tempoRestante, setTempoRestante] = useState(segundosInicial);
	const [estaRodando, setEstaRodando] = useState(false);

	// Decrementar o timer por 1
	function decrementar() {
		setTempoRestante((numAnterior) => {
			if (numAnterior > 0) {
				return numAnterior - 1;
			}
			return 0;
		});
	}

	// Reiniciar o pomodoro
	function reiniciar() {
		setEstaRodando(false);
		setTempoRestante(segundosInicial);
	}

	// Lógica para alternar entre inicio/pausa
	function iniciarOuPausar() {
		if (tempoRestante > 0) {
			setEstaRodando((estado) => {
			if (estado == false) {
				return true;
			}
			return false;
		});
		}
	}

	// Iniciar ou pausar decremento do pomodoro
	useEffect(() => {
		// Iniciar decremento

		// Esta variável inicializa indicando o TypeScript que ela pode ser do tipo
		// setInterval ou undefined quando o cronômetro não estiver rodando
		let iniciarDecremento: ReturnType<typeof setInterval> | undefined;

		if (estaRodando) {
			iniciarDecremento = setInterval(decrementar, 1000);
		}

		return () => {
			// Pausar decremento
			clearInterval(iniciarDecremento);
		};
	}, [estaRodando]);

	// Observar se o tempo do pomodoro chegou a 0 e atualizar as funções devidamente
	// Isso evita o efeito colateral do stale closure
	useEffect(() => {
		if (tempoRestante == 0) {
			setEstaRodando(false);
		}
	}, [tempoRestante]);

	// Renderização da página
	return (
		<div className="bg-white">
			<h1>Pomodoro</h1>

			{/* Math.floor: retorna o "chão" de um número, exemplo: 5.9 -> 5 */}
			{/* toString: retorna o que estiver entre parênteses para uma string */}
			{/* padStart: usado para formatação de texto, exemplo nesse uso: 9 -> 09 */}
			<p>
				{(Math.floor(tempoRestante / 60)).toString().padStart(2, "0")}{/* Minutos */}
				:
				{(tempoRestante % 60).toString().padStart(2, "0")}{/* Segundos */}
			</p>

			{/* <button onClick={decrementar}>
				Decrementar
			</button> */}

			<br />

			<button onClick={iniciarOuPausar}>
				{estaRodando ? "Pausar" : "Iniciar"}
			</button>

			<br />

			<button onClick={reiniciar}>
				Reiniciar
			</button>
		</div>
	);
}