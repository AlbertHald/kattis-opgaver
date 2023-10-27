<script lang="ts">
    import { beerCounter } from "./counter";
    let count = 0;
  
    beerCounter.subscribe(value => {
      count = value;
    });
  </script>
  
  <div>
    <p>Counter Value: {count}</p>
  </div>