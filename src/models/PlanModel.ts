import { db } from "@/database/sqlConnect";

class PlanModel {
  getPlanField() {
    db.connect(function (err) {
      if (!err) {
        console.log("Connected");
      } else {
        console.log("Connection Failed");
      }
    });
    return new Promise((resolve, reject) => {
      db.query("SHOW COLUMNS FROM plan", function (err, rows, filed) {
        if (err) reject(err);
        else {
          let nameArrary = [] as any[];
          Object.keys(rows).forEach(function (key) {
            let row = rows[key];
            if (row.Field != "id") nameArrary.push(row.Field);
          });
          resolve(nameArrary);
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
