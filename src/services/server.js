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
        },
        image() {
          return `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`;
        },
        price() {
          return faker.commerce.price();
        }
      }),
    },
    models: {
      game: Model,
    },
    routes() {
      this.namespace = "api";
      this.timing = 1000;
      this.resource("games");
    },
    seeds(server) {
      server.loadFixtures();
      server.createList("game", 40);
    },
  };

  return new Server(serverconfig);
}
