<script lang="ts">
	import CounterDis from "../../lib/components/counter/CounterDis.svelte";
  import { beerCounter } from "$lib/components/counter/counter";

  async function incrementCounter() {
  const response = await fetch('/api/increment', { method: 'POST' });
  if (response.ok) {
    const data = await response.json();
    console.log('Updated Counter Value:', data.count);
  } else {
    console.error('Failed to increment counter.');
  }
}
</script>

<button on:click={incrementCounter}>Increment</button>
<CounterDis />
