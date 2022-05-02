import { Request, Response } from "express";
import { successHandler, errorHandler } from "@/utilities";

class UserController {
  constructor() {
    this.getUser = this.getUser.bind(this);
    this.postUser = this.postUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  public async getUser(req: Request, res: Response): Promise<void> {
    try {
      // Dome some with success here
      res.status(200).json(successHandler("OK", { data: "GET" }, res.statusCode));
    } catch (err) {
      res.status(401).json(errorHandler("Not authorized", res.statusCode));
    }
  }

  public async postUser(req: Request, res: Response): Promise<void> {
    // Do with validation here
    // res.status(422).json(validationHandler({ username: "Username is required." }));

    try {
      // Dome some with success here
      res.status(200).json(successHandler("OK", { data: "POST" }, res.statusCode));
    } catch (err) {
      // Do some with error here
      res.status(401).json(errorHandler("Not authorized", res.statusCode));
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      // Dome some with success here
      res.status(200).json(successHandler("OK", { data: "PUT" }, res.statusCode));
    } catch (err) {
      // Do some with error here
      res.status(401).json(errorHandler("Not authorized", res.statusCode));
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      // Dome some with success here
      res.status(200).json(successHandler("OK", { data: "DELETE" }, res.statusCode));
    } catch (err) {
      // Do some with error here
      res.status(401).json(errorHandler("Not authorized", res.statusCode));
    }
  }
}

export default new UserController();
