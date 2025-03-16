<script>
	const maxHinta = 999999;

	let hinta = $state(100);
	let alennus = $state(0);
	let lopullinenHinta = $derived((hinta - (hinta * alennus) / 100).toFixed(2));

	function hintaTsekki(e) {
		const numero = Number(e.target.value);
		if (isNaN(numero) || numero < 0) {
			e.target.value = '';
		} else if (numero >= 0 && numero <= maxHinta) {
			hinta = numero;
		}
	}
</script>

<main>
	<h1>Konsta Poikolainen ALE-laskuri</h1>

	<label for="hinta">Hinta</label>
	<input id="hinta" type="number" min="1" max={maxHinta} oninput={hintaTsekki} />

	<label for="alennus">Alennus</label>
	<input id="alennus" type="range" min="0" max="100" step="1" bind:value={alennus} />

	<p>Ale-prosentti: <b>{alennus} %</b></p>

	<p>
		{#if hinta}
			Alennettu hinta: <b>{lopullinenHinta}</b>
		{:else}
			Ei hintaa
		{/if}
	</p>

	<hr />
	<a href="/info">Infoa ALE-laskurista</a>
</main>

<style>
	main {
		font-family: 'Arial', sans-serif;
		background-color: #f4f4f9;
		color: #333;
	}

	label {
		display: block;
		margin: 1em 0 0.5em;
		font-weight: bold;
		color: #555;
		font-size: 1.1em;
	}

	main {
		text-align: center;
		padding: 2em;
		max-width: 320px;
		margin: 2em auto;
		background: #fff;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 300;
		margin-bottom: 0.5em;
	}

	input[type='number'],
	input[type='range'] {
		width: 100%;
		padding: 0.5em;
		margin-bottom: 1em;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	input[type='range'] {
		-webkit-appearance: none;
		background: #ddd;
		height: 8px;
		border-radius: 5px;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 20px;
		height: 20px;
		background: #ff3e00;
		border-radius: 50%;
		cursor: pointer;
	}

	input[type='range']::-moz-range-thumb {
		width: 20px;
		height: 20px;
		background: #ff3e00;
		border-radius: 50%;
		cursor: pointer;
	}

	p {
		font-size: 1.2em;
		margin: 0.5em 0;
	}

	b {
		color: #ff3e00;
		font-weight: bold;
	}

	hr {
		color: #ff3e00;
		border: none;
		height: 1px;
		background-color: #ff3e00;
		margin: 2em 0;
	}

	a {
		color: #ff3e00;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	@media (min-width: 640px) {
		main {
			max-width: 480px;
		}
	}
</style>
