<script>
	let users = [];
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
		const username = event.srcElement.outerText
		await fetch("/api/friend/addFriend", {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: username }),
		});
	}
</script>

<svelte:window on:keyup={postQuery} />

<div id="wholePage">
	<div id="container">
		<h1>Add Friend</h1>
		<input id="friendInput" type="text" />
		<div id="friendContainer">
			{#each users as user}
				<button href="" on:click={addFriend}>
					<div id="friend">
						<span>{user}</span>
					</div>
				</button>
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
	}

	#container {
		background-color: blue;
		width: 500px;
		height: 700px;
		display: grid;
		/* align-items: center; */
	}

	h1 {
		font-size: 50px;
		color: white;
		/* min-width: 500px; */
		margin: 0 auto;
	}

	input {
		width: 50%;
		height: 20px;
		margin: 0 auto;
		position: absolute;
		top: 30%;
		left: 26%;
	}

	#friendContainer {
		/* width: 20vw; */
		position: relative;
		top: 16.5%;
		height: 50vh;
		background-color: #1b1b1b;
		float: left;
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
