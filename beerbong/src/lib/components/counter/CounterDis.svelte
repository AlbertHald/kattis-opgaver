<script lang="ts">
  import { beerCounter } from "./beerCounter";

  let count: number;  
  count = 0;
  function incrementCounter(){
    count++;
  }

  async function incrementCounterPost(): Promise<void> {
      const response = await fetch('/api/increment', { method: 'POST' });
      if (response.ok) {
        const data = await response.json();
        count = count + data.incrementer;
        console.log('Updated Counter Value:', count);
      } else {
      console.error('Failed to increment counter.');
    }
  }

</script>
  
  <div>
    <p>Counter Value: {count}</p>
    <button on:click={incrementCounterPost}>Increment</button>
  </div>