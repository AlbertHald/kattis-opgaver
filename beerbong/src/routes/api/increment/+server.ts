import type { RequestHandler } from "./$types";

export const POST:RequestHandler = () => {
    const newBeerCounter = {incrementer : 1};
    // Respond with the updated counter value
    return new Response(JSON.stringify(newBeerCounter), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,}); 
}
