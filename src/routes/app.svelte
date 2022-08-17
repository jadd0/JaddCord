<script context="module">
	export const prerender = false;
	export async function load({ session }) {
		if (!session.authenticated) {
			return {
				status: 302,
				redirect: "http://localhost:5173/login",
			};
		}
		return {
			props: session.email,
		};
	}
</script>

<script>
	import { onMount } from "svelte";
	let email;
	let friends;

	let user = {};

	function del() {
		document.cookie = `jwt=0; path=/;`;
		window.location.reload();
	}

	// const changeSize = () => {
	// 	const holder = document.getElementById("messageInputHolder")
	// 	const input = document.getElementById("input").clientHeight

	// 	console.log(input)
	// 	document.getElementById("messageInputHolder").setAttribute('style',`height:${input+30}px`)
	// }

	onMount(async () => {
		const res = await fetch("http://localhost:5173/api/user");
		user = await res.json();
		console.log(user);
		email = user.email;
		console.log(user.FriendList.list);
		friends = user.FriendList.list;
	});
</script>

<!-- {#if response.status == 200}
  <h1>Hello</h1>
{/if} -->

<!-- <svelte:window on:keydown={changeSize} /> -->

<body>
	{#if email != undefined}
		<div id="whole">
			<div id="friendContainer">
				<button>Hello</button>
				{#each friends as friend}
					<a href="/app">
						<div id="friend">
							<span>{friend.name}</span>
						</div>
					</a>
				{/each}
			</div>

			<div id="messageContainer">
				<div id="messageBoard" />
				<div id="messageInputHolder">
					<!-- <textarea type="text" /> -->
					<span id="input" role="textbox" contenteditable />
				</div>

				<!-- <button on:click={del}>Logout</button> -->
			</div>
		</div>
	{/if}
</body>

<style>
	body {
		margin: 0;
		padding: 0;
		border: 0;
		max-height: 95vh;
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

	a {
		text-decoration: none;
	}

	#whole {
		overflow: hidden;
		display: flex;
	}

	#friendContainer {
		width: 20vw;
		height: 100vh;
		background-color: #1b1b1b;
		float: left;
	}

	#friend {
		text-align: center;
		line-height: 5vh;
		width: 100%;
		height: 5vh;
		background: #1b1b1b;
	}

	#friend:nth-child(2n) {
		background-color: #333 !important;
	}

	#messageBoard {
		background-color: red;
		height: 92vh;
		min-height: 70vh;
		width: 80vw;
	}

	#messageInputHolder {
		/* overflow: overlay; */

		/* display: table; */
		position: absolute;
		bottom: 0vh;
		width: 80vw;
		height: auto;
		padding: 20px;
		background: white;
		/* float: bottom; */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#input {
		display: table-row;
		/* position: absolute;
		bottom: 0vh; */
		min-width: 500px;
		max-width: 500px;
		min-height: 45px;
		max-height: 200px;
		border: 1px solid #556677;
		overflow-wrap: break-word;
		overflow: scroll;
		/* margin-bottom: 10px; */
	}

	span {
	}
</style>
