import { Request, Response } from "express";

class PlanController {
  echo(req: Request, res: Response) {
    res.send("echo");
  }
}

export default PlanController;
