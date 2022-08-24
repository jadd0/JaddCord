<script>
	import { page } from "$app/stores";
	export let user;
	export let friendBool;

	console.log(friendBool);

	// if (self) {
	// 	console.log("true")
	// }

	let email;
	let friends;
	export let bool = false;

	function show() {
		bool === true ? (bool = false) : (bool = true);
	}

	async function addFriend() {
		console.log("hello");
		const username = $page.params.username;
		await fetch("http://localhost:5173/api/friend/addFriend", {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: username }),
		});
	}
</script>

<body>
	<div id="holder">
		<div id="ppHolder">
			<div id="container">
				<div id="profilePicture" />
			</div>

			<!-- <h1>Last Changed: </h1> -->
		</div>

		<!-- <h2>Hey {user.name}</h2> -->
		<div id="container2">
			<div id="nameHolder">
				<h1>{user.name}</h1>
				<h2>@{user.username}</h2>
				{#if friendBool == false}
					<button on:click={addFriend} />
				{/if}
			</div>
		</div>
	</div>
</body>

<!-- <svelte:window on:scroll={scrollF}/> -->
<style>
	body {
		margin: 0;
		padding: 0;
		border: 0;
		height: 1000vh;
		width: 100vw;
		background-color: #141414;
		color: white;
		/* overflow: hidden; */
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
		color: white;
		font-size: 70px;
		/* position: relative;
    padding: 0vw;
    margin: 0px; */
		clear: both;
	}

	h2 {
		color: white;
		font-size: 40px;
		/* width: 0px; */
		padding: 0;
		margin: 0;
		margin-top: -70px;
	}

	#nameHolder {
		margin-top: 5vh;
		width: auto;
		height: 27vh;
		display: grid;
		/* justify-content: center;
    align-items: center; */
	}

	#ppHolder {
		width: 33vw;
		height: 100vh;
		background: #1b1b1b;
		display: grid;
		justify-content: center;
		align-items: center;
	}

	#holder {
		display: flex;
		height: 100vh;
	}

	#profilePicture {
		width: 300px;
		height: 300px;
		border: 2px solid white;
		border-radius: 400px;
		/* margin: 150px; */
	}

	#container {
		min-width: 3vw;
	}

	h2 {
		clear: both;
		margin: 50px;
	}

	#container2 {
		width: 77vw;
		height: 100vh;
		background: none;
		float: right;
	}
</style>
