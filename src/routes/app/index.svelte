<script>
	import { onMount } from "svelte";
	import AddFriendPopUp from "../addFriendPopUp.svelte";

	let email;
	export let bool = false;
	// $: bool = false

	let user = {};
	let friendList = [];
	let items = [];

	function findFriend() {
		// if(friendSearchValue == '') return
		items = friends.filter(
			(user) => user.username.indexOf(friendSearchValue) !== -1
		);
		// .map(({key, value}) => ({[key.username]: key.name}), ({username: user.username}));
		console.log(items);
	}

	let friends = [];
	let friendSearchValue = "";

	let expanded = false;

	// function del() {
	// 	document.cookie = `jwt=0; path=/;`;
	// 	window.location.reload();
	// }

	function show() {
		// const h = new AddFriendPopUp()
		// console.log(h)
		// window.getElementById("all").style.display = "block"
		// bool = false
		// console.log("heplo")
		// bool = true
		bool === true ? (bool = false) : (bool = true);
	}

	onMount(async () => {
		const res = await fetch("http://localhost:5173/api/user");
		user = await res.json();
		console.log(user);
		email = user.email;
		console.log(user.FriendList.list);
		friends = user.FriendList.list;
	});

	function change() {}

	function expand() {
		if (!expanded) {
			const box = document.getElementById("friendSearch");
			const container = document.getElementById("friendContainer");

			console.log(box.style.height);

			// if (box.style.height === "94vh") {
			// 	box.style.height = "27px";
			// 	expanded = false;
			// 	return;
			// }

			box.style.cursor = "normal";

			container.style.width = "40vw";
			// holder.style.width = "30vw"
			box.style.width = "35vw";
			box.style.height = "94vh";

			expanded = true;
			// document.getElementById("searchHolder").style.display = "block"
			setTimeout(() => {
				// console.log(document.getElementById("friendSearch").style.display)
				document.getElementById("searchHolder").style.display = "block";
				document.getElementById("nothingDisplay").style.display =
					"block";
					document.getElementById("searchImage").style.display = "block"

			}, 75);
			return;
		}
		const box = document.getElementById("friendSearch");
		const container = document.getElementById("friendContainer");

		console.log(box.style.height);

		// if (box.style.height === "94vh") {
		// 	box.style.height = "27px";
		// 	expanded = false;
		// 	return;
		// }

		box.style.cursor = "normal";

		container.style.width = "25vw";
		// holder.style.width = "30vw"
		box.style.width = "20vw";
		box.style.height = "35px";

		expanded = true;
		// document.getElementById("searchHolder").style.display = "block"
		setTimeout(() => {
			// console.log(document.getElementById("friendSearch").style.display)
			document.getElementById("searchHolder").style.display = "none";
			document.getElementById("nothingDisplay").style.display = "none";
			document.getElementById("searchImage").style.display = "none"
		}, 75);
		expanded = false

		// document.getElementById("friendSearch").style.overflow = "scroll"
		// const holder = document.getElementById("searchHolder");

		// holder.style.width = "30vw"
		// box.style.height === "94vh" ? () => {} : () => {}

		// expanded = true
		// // box.style.height === "94vh"
		// // box.style.height = "94vh"
	}

	function deexpand() {
		const box = document.getElementById("friendSearch");
		console.log(box.style.height);
		// box.style.height === "94vh"
		box.style.height = "27px";
	}

	function close() {}
</script>

<!-- {#if response.status == 200}
  <h1>Hello</h1>
{/if} -->

<!-- <svelte:window on:keydown={changeSize} /> -->

<body>
	{#if email != undefined}
		<div id="whole">
			<div id="friendContainer">
				<!-- <button on:click={show}>Hello</button> -->
				<div type="text" id="friendSearch" on:click={expand}>
					{#if expanded == true}
						<div id="searchHolder">
							<img src="search.png" id="searchImage" />
							<input
								type="text"
								bind:value={friendSearchValue}
								on:input={findFriend}
								id="search"
							/>
							<div id="divider" />
							{#each items as item}
								<div id="searchedFriend">
									<div id="profilePicture" />
									<h1 id="searchedFriendName">{item.name}</h1>
									<h2 id="searchedFriendUsername">
										@{item.username}
									</h2>
								</div>
							{/each}
							{#if items.length == 0}
								<h1 id="nothingDisplay" style="display: none">
									Nothing to display
								</h1>
							{/if}
						</div>
						<button id="cancelButton" on:click={close}
							><img
								src="Close-26.png"
								style="background: none !important "
							/></button
						>
					{/if}
				</div>

				{#if bool == true}
					<AddFriendPopUp />
				{/if}
				{#each friends as friend}
					<a href="/app">
						<div id="friend">
							<span>{friend.name}</span>
						</div>
					</a>
				{/each}
			</div>

			<!-- <div id="messageContainer"> -->
			<!-- <div id="messageBoard" />
				<div id="messageInputHolder"> -->
			<!-- <textarea type="text" /> -->
			<!-- <span id="input" role="textbox" contenteditable /> -->
			<!-- </div> -->

			<!-- <button on:click={del}>Logout</button> -->
			<!-- </div> -->
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

	#cancelButton {
		position: absolute;
		top: calc(2% + 5px);
		left: 90%;
	}

	#divider {
		height: 10px;
	}

	#profilePicture {
		width: 45px;
		height: 45px;
		border-radius: 200px;
		background: white;
		padding: 0;
		margin: 0;
		position: absolute;
		top: 60px + n;
		left: 30px;
	}

	#searchedFriendName {
		margin-top: 5px;
		font-size: 25px;
		color: rgb(206, 206, 206);
	}

	#searchedFriendUsername {
		font-size: 20px;
		/* padding-bottom: 200px; */
	}

	#searchedFriend {
		text-align: center;
		line-height: 30px;
		margin: 0 auto;
		/* width: 120%; */
		height: 65px;
		/* background: #1b1b1b; */
		border-bottom: solid 1px rgb(145, 145, 145);
	}

	/* #searchedFriend:nth-child(1) {
		margin-top: 10px;
		background: blue
	} */

	#searchImage {
		display: none;
		position: absolute;
		left: 3vw;
		top: calc(2% + 5px);
		/* margin: 0 auto; */
		width: 25px;
		height: 25px;
		/* margin-top: 5px; */
		/* margin-left: -16px; */
		padding: 0;
	}

	#searchHolder {
		/* width: 100px;
		height: 100px; */
		/* background: red; */
		display: none;
		width: 80%;
		height: 35px;
		margin: 0 auto;
		margin-left: 5%;
		margin-top: 2vh;
		background: #1b1b1b;
		border-radius: 20px;

		transition: all 1s;
		/* margin-bottom: 0px; */
		/* display: flex;  */
		/* justify-content: center;  */
	}

	#search {
		/* position: absolute; */
		/* left: 50px; */
		/* margin-bottom: 20px; */
		text-align: left;
		color: white;
		width: 23vw;
		height: 34px;
		background: none;
		/* margin-top: 0.4vh; */
		margin-left: 1.9vw;

		/* float: left; */
	}

	#whole {
		overflow: hidden;
		display: flex;
	}

	#friendSearch {
		width: 20vw;
		height: 27px;
		position: absolute;
		top: 3vh;
		/* margin: 0 auto; */
		left: 2.5vw;
		/* margin-top: 20px; */
		border-radius: 30px;
		background: rgb(41, 41, 41);
		transition: all 1s;
		overflow: scroll;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none;
	}

	#friendSearch::-webkit-scrollbar {
		display: none;
	}

	#friendSearch:hover {
		cursor: text;
	}

	#friendSearch.expanded {
		/* transition: max-height 1s ease-in-out; */
		/* height: 94vh; */
		/* height: 94vh; */
		background-color: rgb(65, 65, 65);
		height: 94vh;
		/* border-radius: 10px; */
		/* transform: scaleY(10) */
		/* transition: max-height 1s ease-in-out; */
	}

	#friendContainer {
		width: 25vw;
		height: 100vh;
		background-color: #1b1b1b;
		float: left;
		transition: all 1s;
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
