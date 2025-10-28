import Fastify from "fastify";
const app = Fastify();
app.get("/health", async () => ({ ok: true }));
app.listen({ port: 3000 }).then(() => console.log("server listening on 3000"));
