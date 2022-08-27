<script>
	import Nav from "../components/nav.svelte";
	import { onMount } from "svelte";

	// function scrollF() {
	// 	const nav = document.getElementById("navbar");
	// 	console.log(nav.offsetTop);
	// 	if (nav.offsetTop >= 100) {
	// 		document.getElementById("navbar").style.backgroundColor = "#212121";
	// 	} else {
	// 		document.getElementById("navbar").style.backgroundColor = "#141414";
	// 	}
	// }

	function f() {
		console.log("he");
	}
</script>

<body>
	<Nav />

	<h1 id="one">JADD</h1>

	<h2>A revolutionary<br />New way to Immerse<br />With the digital world</h2>

	<h1 id="two">CHAT</h1>
</body>

<!-- <svelte:window on:scroll={scrollF}/> -->
<style>
	@import url("https://rsms.me/inter/inter.css");
	* {
		font-family: "Inter", sans-serif;
		font-weight: 600;
	}
	@supports (font-variation-settings: normal) {
		* {
			font-family: "Inter var", sans-serif;
		}
	}
	/* @font-face {
		font-family: "fenix";
		font-style: normal;
		font-weight: 400;
		src: local("Fontspring-DEMO-fenix-regular"),
			local("Fontspring-DEMO-fenix-regular"),
			url(Fontspring-DEMO-fenix-regular.woff) format("woff");
	}

	@font-face {
		font-family: "rubik latin";
		font-style: normal;
		font-weight: 400;
		src: local("rubik-latin-italic"), local("rubik-latin-italic"),
			url(rubik-latin-italic.woff2) format("woff");
	}

	@font-face {
		font-family: "rubik 400";
		font-style: normal;
		font-weight: 400;
		src: local("rubik-latin-400"), local("rubik-latin-400"),
			url(rubik-latin-400.woff2) format("woff");
	} */

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
		/* font-family: "fenix";
		font-weight: 500; */
	}

	h1 {
		/* color: white; */
		background-image: linear-gradient(
			to left,
			rgb(255, 255, 255),
			rgb(0, 255, 221),
			rgb(0, 41, 103)
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 200px;
	}

	#one {
		float: left;
		margin-left: 10%;
		/* padding-right: 100vw; */
	}

	h2 {
		font-size: 40px;
		margin-top: 50px;
		color: rgb(142, 142, 142);
	}

	#two {
		float: right;
		margin-right: 30%;
	}
</style>
