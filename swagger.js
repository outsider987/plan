const swaggerAutogen = require("swagger-autogen")();

const outputFile = "src/swagger_output.json";
const endpointsFiles = ["src/routes/plan.route.ts"];

swaggerAutogen(outputFile, endpointsFiles);
