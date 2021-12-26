import PlanController from "@/controllers/PlanController";
import Route from "./route";

class AuthRoute extends Route {
  private planController = new PlanController();

  constructor() {
    super();
    this.setRoutes();
  }

  protected setRoutes() {
    this.router.get("/planField", this.planController.getPlanField);
  }
}

export default AuthRoute;
