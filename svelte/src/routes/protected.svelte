<script context="module">
	export const prerender = false;
	export async function load({ session }) {
		console.log(session);
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
	export let email;
	let name;

	console.log("hello")
	
	onMount(async () => {
		const res = await fetch('http://localhost:5173/user')
		const user = await res.json()
		name = user.name;
	})
</script>

<!-- {#if response.status == 200}
  <h1>Hello</h1>
{/if} -->

<h1>Hey {name} you are currently logged in on email {email}	</h1>
