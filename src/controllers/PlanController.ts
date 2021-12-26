import { PlanModel } from "@/models/PlanModel";
import { Request, Response } from "express";

class PlanController {
  async getPlanField(req: Request, res: Response) {
    const planModal = await new PlanModel();
    const dates = await planModal.getPlanField();
    await res.send(dates);
  }
}

export default PlanController;
