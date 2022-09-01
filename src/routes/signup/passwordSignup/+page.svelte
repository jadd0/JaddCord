<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  export let password = ""
</script>



<section>
  <h1>Password</h1>
  <input type="password" id="password" placeholder="password" bind:value={password} />

  <button>Next</button>
</section>



<style>
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

</style>