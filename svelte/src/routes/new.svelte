<script>
  const one = "jadd@jadd.com"
  const two = "john123"


  const sub = async () => {
    console.log(JSON.stringify({one, two}))
    const da = await fetch("/api", {
      method: "post",
      body: JSON.stringify({one, two})
    })
    
    const data = await da.json()
    console.log(data)
  }

</script>

<!-- <h1>{item}</h1> -->
<button on:click={sub}>jjj</button>