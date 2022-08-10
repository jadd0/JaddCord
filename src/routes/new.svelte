<script>
  const user = {
			email: "email",
			username: "username",
			name: "name",
			password: "password",
			phoneNumber: "phoneNumber",
	};
  const sub = async () => {
    // console.log(JSON.stringify({one, two}))
    const da = await fetch("/api/signup", {
      method: "post",
      body: JSON.stringify(user)
    })
    
    const data = await da.json()
    console.log(data)
  }

</script>

<!-- <h1>{item}</h1> -->
<button on:click={sub}>jjj</button>