<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	onMount(() => {
		const color = "rgb(255, 112, 17)";
		console.log("hello");
		switch ($page.url.pathname) {
			case "/about":
				console.log("about");
				// document.getElementById("line1").style.display = "block";
				document.getElementById("about").style.color = color;
				break;
			case "/":
				console.log("home");
				document.getElementById("home").style.color = color;

				break;
			case "/login":
				console.log("login");
				document.getElementById("login").style.color = color;

				break;
		}
	});
	function b() {
		const nav = document.getElementById("navbar");
		if (nav.offsetTop >= 80) {
			document.getElementById("navbar").style.backgroundColor = "#1b1b1b";
		} else {
			document.getElementById("navbar").style.backgroundColor = "#141414";
		}
	}
</script>

<div id="navbar">
	<a href="/">
		<div class="nav notLeft" id="homeLogo">
			<span id="J">J</span><span id="hiddenJadd">add</span><span id="chat"
				>Chat</span>
		</div>
	</a>
	<div id="left">
		<a href="/login" id="other">
			<div class="nav fromRight" id="login">Login</div>
		</a>

		<a href="/" id="other">
			<div class="nav" id="home">Home</div>
		</a>
		<a href="/about">
			<div class="nav fromLeft" id="about">About</div>
		</a>
	</div>
</div>

<!-- <div id="lines">
	<div class="line" id="line1" />
	<div class="line not" id="line2" />
	<div class="line not" id="line3" />
</div> -->

<svelte:window on:scroll={b} />

<style>
	/* @font-face {
		font-family: "fenix";
		font-style: normal;
		font-weight: 400;
		src: local("Fenix-Regular"), local("Fenix-Regular"),
			url(Fenix-Regular.woff) format("woff");
	} */

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
		height: 12vh;
		padding: 0;
		background-color: #141414;
		position: sticky;
		top: 0;
		transition: all 0.4s 0.1s ease-in-out;
		/* box-shadow: 0px 5px 50px 100px #212121; */
	}

	/* #navbar div {
		width: 10%;
		height: 100%;
		margin: 0 auto;
		text-align: center;
		vertical-align: middle;
		line-height: 12vh;
		color: white;
		float: right;
	} */

	.nav,
	#homeLogo {
		width: 10%;
		margin: 0 auto;
		display: inline-block;
		/* transition: all 0.2s ease-out; */
	}

	#J {
		/* position: sticky; */
		color: white;
		/* background-color: #141414; */
		display: inline-block;
	}

	#lines {
		width: 100vw;
		height: 0px;
	}

	#left {
		width: 80vw;
		max-height: 12vh;
		padding: 0;
		/* background-color: #141414; */
		position: sticky;
		top: 0;
		transition: all 0.4s ease-in-out;
	}

	#chat {
		display: inline-block;
		/* animation: newJadd 0.3s ease-in-out; */
	}

	#left div,
	#homeLogo {
		min-width: 10%;
		height: 100%;
		margin: 0 auto;
		text-align: center;
		vertical-align: middle;
		line-height: 12vh;
		color: white;
	}

	#left,
	#left div {
		float: right;
	}

	#hiddenJadd {
		/* display: none; */
		color: rgb(255, 112, 17);
	}

	.line {
		width: 10%;
		margin: 0 auto;
		text-align: center;
		vertical-align: middle;
		border-top: solid 3px none;
		display: inline-block;
		margin-top: -29px;
	}

	/* .nav::after {
		display: block;
		content: "";
		border-bottom: solid 3px red;
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
	} */

	#chat {
		/* transition: transform 1s ease-in-out; */
		display: inline-block;
		color: white;
		border-radius: 1000px;
		/* opacity: 0; */
	}



	/* #homeLogo:hover #J {
		animation: new; 
	}	 */

	@keyframes new {
		100% {
			transform: translateX(42px);
		}
	}

	#homeLogo {
		/* clear: both; */
		display: flex;
		float: left;
		margin-left: 30px;
	}

	#homeLogo:hover #hiddenJadd {
		/* animation: hidden1 1.5s steps(60, end); */
		/* display: inline-block; */
		overflow: hidden;
		white-space: nowrap;
	}

	#hiddenJadd {
		/* transition: all 1s ease-in-out; */
		width:0%;
    overflow:hidden;
		display: inline-block;
    -webkit-transition: width 0.7s 0.2s ease-in-out;
    -moz-transition: width 0.7s 0.2s ease-in-out;
    -o-transition: width 0.7s 0.2s ease-in-out;
    transition: width 0.7s 0.2s ease-in-out;	
	}

	#homeLogo:hover #hiddenJadd {
		/* display: inline-block; */
		/* animation: hidden1 1s infinite; */
		width: 37px;
	}

	@keyframes hidden1 {
		from {
			width: 0;
		}
		to {
			width: 37px;
		}
	}

	/* .nav:hover:after {
		transform: scaleX(1);
	}

	.nav.fromRight:after {
		transform-origin: 100% 50%;
	}

	.nav.fromLeft:after {
		transform-origin: 0% 50%;
	} */

	/* .line {
    color: blue;
    width: 10%;
		margin: 0 auto;
		display: inline-block;
    border-bottom: solid 3px #ff9500;
  } */

	.not,
	#other {
		/* margin-left: 100px; */
	}

	#login, #about, #home {
		transition: all 0.5s ease-in-out
	}

	#login:hover, #about:hover, #home:hover, #homeLogo:hover {
		color:rgb(255, 112, 17);
	}
</style>
