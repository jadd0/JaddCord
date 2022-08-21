<script>
	let users = [];
	// export let bool = false
	const postQuery = async () => {
		const val = document.getElementById("friendInput").value;

		if (val == "") {
			users = [];
			return;
		}

		const rawResponse = await self.fetch(
			"http://localhost:5173/api/user/userList",
			{
				method: "post",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ query: val }),
			}
		);
		const h = await rawResponse.json();
		users = h.users;
	};

	async function addFriend(event) {
		const username = event.srcElement.outerText;
		await fetch("/api/friend/addFriend", {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: username }),
		});
	}

	function hello() {
		// bool = false
		document.getElementById("all").style.display = "none"
	}
</script>

<svelte:window on:keyup={postQuery} />

<div id="all">
	<div id="wholePage" on:click={hello} />
	<div id="container">
		<h1>Add Friend</h1>
		<input id="friendInput" type="text" />
		<div id="friendContainer">
			{#each users as user}
				<div id="friend">
					<a href="" on:click={addFriend}>
						<span>{user}</span>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	#wholePage {
		width: 100vw;
		height: 100vh;
		/* position: absolute; */
		display: flex;
		justify-content: center;
		align-items: center;
		background: #141414;
		opacity: 0.7;
		position: absolute;
		z-index: 0;
		margin-top: -27.33px;
	}

	#container {
		/* background-color: #393939; */
		background: #1b1b1b;
		width: 400px;
		height: 80vh;
		display: grid;
		overflow: hidden;
		position: absolute;
		/* margin: 0 auto; */
		top: 10%;
		left: 35%;
		z-index: 1;
		/* align-items: center; */
	}

	h1 {
		font-size: 50px;
		color: white;
		/* min-width: 500px; */
		margin: 0 auto;
		margin-top: 20px;
	}

	input {
		width: 300px;
		height: 20px;
		margin: 0 auto;
		margin-top: 10px;
		/* position: absolute;
		top: 30%;
		left: 26%; */
	}

	#friendContainer {
		/* width: 20vw; */
		position: relative;
		top: 16.5%;
		height: 70vh;
		/* background-color: #393939; */
		overflow: scroll;
	}

	a {
		text-decoration: none;
	}

	#friend {
		text-align: center;
		line-height: 5vh;
		width: 100%;
		height: 5vh;
		color: white;
		font-size: 30px;
		/* background: #1b1b1b; */
	}

	#friend:nth-child(2n) {
		background-color: #333 !important;
	}
</style>
