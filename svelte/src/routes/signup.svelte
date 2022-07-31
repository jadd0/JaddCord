<script>
	import Nav from "../components/nav.svelte";
	import { initializeApp } from "firebase/app";
	import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
 
	import firebaseConfig from "../components/firebaseConfig.json";


	let email = "";
	let username = "";
	let password = "";

	const app = initializeApp(firebaseConfig);

	const signUp = () => {
		const auth = getAuth(app);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});

    
    console.log(auth.currentUser)
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
	<input
		type="text"
		id="name"
		placeholder="name"
		bind:value={name}
	/>
	<input
		type="password"
		id="password"
		placeholder="password"
		bind:value={password}
	/>
	<button on:click={signUp}>Sign Up</button>
  <button on:click={change}>change</button>

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
