import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve((_req) => {
  return new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
    
});
console.log("Abra outro terminal e execulte o comando make up, para começar a game play!")