import Fastify from "fastify";

const server = Fastify({ logger: true });

server.get("/", async (request, reply) => {
  return { hello: "hello world" };
});

const start = async () => {
  try {
    await server.listen({ port: 4321 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();``