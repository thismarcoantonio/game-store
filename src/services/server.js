import { Server, Model, Factory } from "miragejs";
import { config } from "../config";
import faker from "faker";

export function makeServer() {
  const serverconfig = {
    environment: config.env,
    factories: {
      game: Factory.extend({
        name() {
          return faker.commerce.productName();
        },
        description() {
          return faker.commerce.productDescription();
        }
      }),
    },
    models: {
      game: Model,
    },
    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("games");
    },
    seeds(server) {
      server.loadFixtures();
      server.createList("game", 10);
    },
  };

  return new Server(serverconfig);
}
