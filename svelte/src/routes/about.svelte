<script>

	import Nav from "../components/nav.svelte";
	let email;
	let password;

	// function b() {
	// 	const nav = document.getElementById("navbar");
	// 	console.log(nav.offsetTop);
	// 	if (nav.offsetTop >= 100) {
	// 		document.getElementById("navbar").style.backgroundColor = "#212121";
	// 	} else {
	// 		document.getElementById("navbar").style.backgroundColor = "#141414";
	// 	}
	// }

	function c() {
		console.log("hgello");
	}
</script>

<body>
	<Nav />
	
</body>

<!-- <svelte:window on:scroll={b} /> -->

<style>
	body {
		margin: 0;
		padding: 0;
		border: 0;
		height: 1000vh;
		width: 100vw;
		background-color: #141414;
	}

	* {
		font-size: 24px;
		text-align: center;
		color: black;
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: "fenix";
		font-weight: 500;
	}

	#loginBox {
		margin: 0 auto;
		margin-top: 25vh;
		border: 2px solid black;
		width: 25vw;
		border-radius: 20px;
	}
</style>
