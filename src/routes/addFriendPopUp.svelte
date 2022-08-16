<script>
	const send = () => {
		const inp = document.getElementById("friendInput");

		setTimeout(function () {
			console.log(document.getElementById("friendInput").value);
		}, 10);
	};
</script>

<svelte:window on:keydown={send} />

<div id="wholePage">
	<div id="container">
		<h1>Add Friend</h1>
		<input id="friendInput" type="text" />
	</div>
</div>

<style>
	#wholePage {
		width: 100vw;
		height: 100vh;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#container {
		background-color: blue;
		width: 500px;
		height: 700px;
		display: flex;
		justify-content: center;
	}

	h1 {
		font-size: 50px;
		color: white;
	}

	input {
		width: 70%;
		height: 20px;
	}
</style>
