<script>
	import Nav from "../components/nav.svelte";
	import { initializeApp } from "@firebase/app";
	import { getAuth, signInWithEmailAndPassword, updateProfile } from "@firebase/auth";
	import firebaseConfig from "../components/firebaseConfig.json"
	


	let email = "";
	let password = "";

	const app = initializeApp(firebaseConfig);
	
	function createCookie(auth) {
		// authorised for 3 days
		const exdays = 3;
		const d = new Date();
  	d.setTime(d.getTime() + (exdays*24*60*60*1000));

		const expires = "expires="+ d.toUTCString();
		const uid = auth.currentUser.reloadUserInfo.localId
		


		document.cookie = "auth={}"
	}

	const login = () => {
		const auth = getAuth(app);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user)
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const change = () => {
		const auth = getAuth(app);
		updateProfile(auth.currentUser, {
      displayName: "jadd"
    })
		console.log(auth.currentUser.reloadUserInfo.localId)
		createCookie()
	}

	const logout = () => {};

	const print = () => {
		const auth = getAuth(app);
		console.log(auth.currentUser.)

	};
</script>

<body>
	<Nav />
	<input type="email" id="email" placeholder="email" bind:value={email} />
	<input
		type="password"
		id="password"
		placeholder="password"
		bind:value={password}
	/>
	<button on:click={login}>Login</button>
	<button on:click={change}>change</button>
	<button on:click={print}>print</button>
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
