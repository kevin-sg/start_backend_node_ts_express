import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import { UserRoute } from "@/routes";
import { TPathsRoute } from "@/models";
// import { connectToDatabase } from "@/utilities";

const HOST_PORT = parseInt(process.env.PORT as string);

class Server {
  private app: Application;
  private port: number;
  private paths: TPathsRoute;

  public constructor() {
    this.app = express();
    this.port = HOST_PORT;
    this.paths = {
      user: "/api/user",
    };

    // Conntect to DB
    // this.connectToDB()

    // Middleware
    this.middlaware();

    // Routes
    this.routes();
  }

  private async connectToDB() {
    // await connectToDatabase;
  }

  private middlaware() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(this.paths.user, UserRoute);
  }

  public listen() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server listening on port: http://localhost:${this.port}`);
    });
  }
}

export default Server;
