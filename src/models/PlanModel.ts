import { query } from "@/database/sqlConnect";
import dotenv from "dotenv";
import { RowDataPacket } from "mysql2";

dotenv.config();
class PlanModel {
  async getPlanField() {
    await console.log(process.env.DB_HOST);
    const rowDats = (await query("SHOW COLUMNS FROM plan")) as RowDataPacket;
    let nameArrary = (await []) as any[];

    await console.log(rowDats);
    await Object.keys(rowDats).forEach(function (key) {
      let row = rowDats[key];
      if (row.Field != "id") nameArrary.push(row.Field);
    });
    return await nameArrary;
  }
  getPlans() {
    return new Promise((resolve, reject) => {
      query("select * from plan");
    });
  }
}
export { PlanModel };
