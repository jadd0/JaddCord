<script>
	import Nav from "../components/nav.svelte";
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

	const app = initializeApp(firebaseConfig);

	const keyAppend = () => {

	}

	const getExpiryDate = () => {
		const days = 3;
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); 
		return date
	}

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
				return
			}
			
			else if (rawResponse.status == 200) {
					window.location.href = '/protected'
			}
			




			keyAppend(rawResponse.body)
		})();
	};

	const change = () => {
		const auth = getAuth(app);
		updateProfile(auth.currentUser, {
			displayName: "jadd",
		});
		console.log(auth.currentUser.reloadUserInfo.localId);
		createCookie();
	};

	const auth = () => {
		
	}
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

	<button on:click={auth}>auth</button>
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
