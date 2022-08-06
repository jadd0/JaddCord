<script>
	import Nav from "../components/nav.svelte";

	let email = "";
	let username = "";
	let name = "";
	let password = "";
	let phoneNumber = "";


	// TODO encrypt

	const signUp = () => {
		const data = {
			email: email,
			username: username,
			name: name,
			password: password,
			phoneNumber: phoneNumber,
		};

		if (email == "" || username == "" || name == "" || password == "" || phoneNumber == "") {
			console.log("empty")
			return
		}

		// console.log(JSON.stringify(data))
		(async () => {
			const rawResponse = await fetch("/api/signup", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
		})();
	};

	const change = () => {};
</script>

<body>
	<Nav />
	<input type="email" id="email" placeholder="email" bind:value={email} />
	<input
		type="text"
		id="username"
		placeholder="username"
		bind:value={username}
	/>
	<input type="text" id="name" placeholder="name" bind:value={name} />
	<input
		type="password"
		id="password"
		placeholder="password"
		bind:value={password}
	/>
	<input
		type="number"
		id="phoneNumber"
		placeholder="phoneNumber"
		bind:value={phoneNumber}
	/>
	<button on:click={signUp}>Sign Up</button>

	<a href="/login">Login Instead</a>
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
