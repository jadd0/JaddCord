<script context="module">
	export const prerender = false;
	export async function load({ session }) {
		if (session.authenticated == false) {
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
	import { onMount } from 'svelte';
	let email
	
	let user = {}

	function del() {
		document.cookie = `jwt=0; path=/;`
		window.location.reload()
	}

	onMount(async () => {
		const res = await fetch('http://localhost:5173/api/user')
		user = await res.json()

		email = user.email;
	})

</script>

<!-- {#if response.status == 200}
  <h1>Hello</h1>
{/if} -->

{#if email != undefined}
<h1>Hey {user.name} you are currently logged in on email {email}	</h1>

<button on:click={del}>Logout</button>
{/if}
