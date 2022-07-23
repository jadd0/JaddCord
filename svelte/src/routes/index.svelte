<script>
  import Nav from "../components/nav.svelte"
  import adapter from '@sveltejs/adapter-node';
</script>

<body>
<Nav></Nav>

<h1 id="one">JADD</h1>

<h2>A REVOLUTIONARY<br>NEW WAY TO IMMERSE<br>WITH THE DIGITAL WORLD</h2>

<h1 id="two">CHAT</h1>
</body>

<style>
  body {
		margin: 0;
		padding: 0;
		border: 0;
		height: 100vh;
		width: 100vw;
    background-color: rgb(61, 61, 61);
    overflow-x: hidden;
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
		font-weight: 600;
	}

  h1 {
    /* color: white; */
    background-image: linear-gradient(to left, #7fe5e8, #43cafa, #fca399 , #8cdd82, #e1f497, #b7facd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 200px;
  }

  #one {
    float: left;
    margin-left: 10%;
    /* padding-right: 100vw; */
  }

  h2 {
    font-size: 40px;
    margin-top: 50px;
    color: rgb(142, 142, 142);
  }

  #two {
    float: right; 
    margin-right: 30%;
  }
</style>
