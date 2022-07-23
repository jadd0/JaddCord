<script>
  import Nav from "../components/nav.svelte"
  let email
  let password
</script>


<Nav></Nav>

<div id="loginBox">
  <form action="/login" method="POST">
    <div>
        <label for="login">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email" required bind:value={email}>      
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Enter your password" required bind:value={password}>      
    </div>
    <button type="submit">Login</button>
  
  </form>   
</div>

<style>
  body {
		margin: 0;
		padding: 0;
		border: 0;
		height: 100vh;
		width: 100vw;
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
    border: 2px solid black ;
    width: 25vw;
    border-radius: 20px;
  }
</style>
