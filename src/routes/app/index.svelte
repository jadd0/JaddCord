<script>
	import { onMount } from "svelte";
	import AddFriendPopUp from "../addFriendPopUp.svelte";

	let email;
	let friends;
	export let bool = false;
	// $: bool = false

	let user = {};

	function findFriend() {
		console.log(friendSearchValue);
	}


	let friendSearchValue = '';
	$: {
		let arr = []
		
		console.log(friendSearchValue)
	}

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

		// document.getElementById("friendSearch").style.height = "27px";

		// const h = document.getElementById("wholePage")

		// h.addEventListener("click") = function() {
		// 		bool = false;
		// }
	});

	// const seeMore = document.getElementById("seeMoreBtn");
	// const article = document.getElementById("article");

	// seeMore.addEventListener("click", () => {
	// 	article.classList.toggle("expanded");

	// 	const expanded = article.classList.contains("expanded");
	// 	if (expanded) {
	// 		seeMore.innerHTML = "See Less";
	// 	} else {
	// 		seeMore.innerHTML = "See More";
	// 	}
	// });
	function change() {}

	function expand() {
		const box = document.getElementById("friendSearch");
		console.log(box.style.height);

		// if (box.style.height === "94vh") {
		// 	box.style.height = "27px";
		// 	expanded = false;
		// 	return;
		// }

		box.style.cursor = "normal"

		box.style.height = "94vh";
		expanded = true;

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

	// $: if (document.getElementById('friendSearch') !== document.activeElement) {
	// 	document.getElementById("friendSearch").style.height = "3vh"
	// }
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
							<img src='search.png' id="searchImage"/>
							<input type="text" bind:value={friendSearchValue} id="search"/>
						</div>
						
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

	#searchImage {
		position: absolute;
		left: 2vw;
		top: 2.5vh;
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
		width: 17vw;
		margin: 0 auto;
		margin-top: 2vh;
		background: #1b1b1b;
		border-radius: 20px;
		height: 35px;
		/* display: flex;  */
		/* justify-content: center;  */
	}

	#search {
		/* position: absolute; */
		/* left: 50px; */
		/* margin-bottom: 20px; */
		text-align: left;
		color: white;
		width: 12.5vw;
		background: none;
		margin-top: 0.4vh;
		margin-left: 1.4vw;
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
		background: rgb(61, 61, 61);
		transition: all 0.5s;
	}

	#friendSearch:hover {
		cursor: text;
	}

	#friendSearch.expanded {
		/* transition: max-height 0.5s ease-in-out; */
		/* height: 94vh; */
		/* height: 94vh; */
		background-color: rgb(65, 65, 65);
		height: 94vh;
		/* border-radius: 10px; */
		/* transform: scaleY(10) */
		/* transition: max-height 0.5s ease-in-out; */
	}

	#friendContainer {
		width: 25vw;
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
