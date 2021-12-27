import { db } from "@/database/sqlConnect";
import dotenv from "dotenv";
dotenv.config();
class PlanModel {
  async getPlanField() {
    await console.log(process.env.DB_HOST);
    await db.connect(function (err) {
      if (!err) {
        console.log("Connected");
      } else {
        console.log("Connection Failed");
      }
    });
    return await new Promise((resolve, reject) => {
      db.query("SHOW COLUMNS FROM plan", function (err, rows, filed) {
        if (err) reject(err);
        else {
          let nameArrary = [] as any[];
          Object.keys(rows).forEach(function (key) {
            let row = rows[key];
            if (row.Field != "id") nameArrary.push(row.Field);
          });
          resolve(nameArrary);
          db.destroy();
        }
      });
    });
  }
  getPlans() {
    db.connect(function (err) {
      if (!err) {
        console.log("Connected");
      } else {
        console.log("Connection Failed");
      }
    });
    return new Promise((resolve, reject) => {
      db.query("select * from plan", function (err, rows, filed) {
        if (err) reject(err);
        else {
          resolve(rows);
        }
      });
    });
  }
}
export { PlanModel };
