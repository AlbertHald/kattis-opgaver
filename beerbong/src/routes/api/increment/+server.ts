import { beerCounter } from "../../../lib/components/counter/counter";
import { get } from "svelte/store";

export function POST() {
    // Increment the counter by 1
    beerCounter.update((n) => n + 1);
  
    // Respond with the updated counter value
    return new Response(JSON.stringify(get(beerCounter)), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,}); 
  }