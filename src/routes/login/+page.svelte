<script>
	import Nav from "../../components/nav.svelte";
	import { onMount } from "svelte";

	onMount(() => {
		document
			.getElementById("login")
			.addEventListener("click", function (event) {
				event.preventDefault();
			});
	});

	let email = "";
	let password = "";

	const login = () => {
		// console.log("logim	")
		(async () => {
			const rawResponse = await fetch("/api/login", {
				method: "post",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			});

			if (rawResponse.status == 401) {
				document.getElementById("incorrect").style.display = "block";
				return;
			} else if (rawResponse.status == 200) {
				window.location.href = "/app";
			}
		})();
	};
</script>

<body>
	<Nav />
	<div id="loginForm">
		<div class="inputDiv">
			<input
				type="email"
				id="email"
				placeholder="email"
				bind:value={email}
			/>
		</div>
		<div class="inputDiv">
			<input
				type="password"
				id="password"
				placeholder="password"
				bind:value={password}
			/>
		</div>
		<button on:click={login} id="loginButton">Login</button>
		<h1 id="incorrect">
			Your email/password is incorrect. Please try again
		</h1>
	</div>
</body>

<!-- <svelte:window on:scroll={b} /> -->
<style>

/* @import url("https://rsms.me/inter/inter.css");
	* {
		font-family: "Inter", sans-serif;
		font-weight: regu;
	}
	@supports (font-variation-settings: normal) {
		* {
			font-family: "Inter var", sans-serif;
		}
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
		color: black;
		display: none;
	}

	#loginForm {
		margin: 0 auto;
		border: 2px solid black;
		background: white;
		width: 400px;
		height: 400px;
		border-radius: 15px;
	}

	input {
		margin: 0 auto;
		line-height: 16px;
	}

	.inputDiv {
		margin: 0 auto;
		font-size: 17px;
		border: 1px solid #dddfe2;
		width: 364px;
		height: 50px;
		display: flex;
		margin-top: 20px;
	}

	.inputDiv:nth-child(1) {
		margin-top: 40px;
	}

	#loginButton {
		margin: 0 auto;
		margin-top: 40px;
		width: 364px;
		height: 50px;
	}
</style>
