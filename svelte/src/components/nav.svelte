<script defer>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	onMount(() => {
		switch ($page.url.pathname) {
			case "/about":
				console.log("about");
				// document.getElementById("line1").style.display = "block";
				document.getElementById("line1").style.borderTop =
					"solid 5px red";
				break;
			case "/":
				console.log("home");
				document.getElementById("line2").style.borderTop =
					"solid 5px red";

				break;
			case "/login":
				console.log("login");
				document.getElementById("line3").style.borderTop =
					"solid 5px red";

				break;
		}
	});
</script>

<body>
<div id="navbar">
	<a href="/about">
		<div class="nav fromLeft" id="about">About</div>
	</a>

	<a href="/" id="other">
		<div class="nav" id="home">Home</div>
	</a>

	<a href="/login" id="other">
		<div class="nav fromRight" id="login">Login</div>
	</a>
</div>

<div id="lines">
	<div class="line" id="line1" />
	<div class="line not" id="line2" />
	<div class="line not" id="line3" />
</div>
</body>

<style>
	@font-face {
		font-family: "fenix";
		font-style: normal;
		font-weight: 400;
		src: local("Fenix-Regular"), local("Fenix-Regular"),
			url(Fenix-Regular.woff) format("woff");
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
		font-weight: 600;
	}

	#navbar {
		width: 100vw;
		height: 7vh;
		padding: 0;
		background-color: rgb(45, 45, 45);
		top: 0;
	}

	#navbar div {
		width: 10%;
		height: 100%;
		margin: 0 auto;
		text-align: center;
		vertical-align: middle;
		line-height: 7vh;
		color: white;
	}

	.nav {
		width: 10%;
		margin: 0 auto;
		display: inline-block;
		transition: all 0.4s ease-out;
	}

	#lines {
		width: 100vw;
		height: 0px;
	}

	.line {
		width: 10%;
		margin: 0 auto;
		text-align: center;
		vertical-align: middle;
		border-top: solid 5px none;
		display: inline-block;
		margin-top: -27px;
	}

	.nav::after {
		display: block;
		content: "";
		border-bottom: solid 5px red;
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
	}

	.nav:hover:after {
		transform: scaleX(1);
	}

	.nav.fromRight:after {
		transform-origin: 100% 50%;
	}

	.nav.fromLeft:after {
		transform-origin: 0% 50%;
	}

	/* .line {
    color: blue;
    width: 10%;
		margin: 0 auto;
		display: inline-block;
    border-bottom: solid 3px #ff9500;
  } */

	.not,
	#other {
		margin-left: 100px;
	}
</style>
