"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppConfiguration_1 = require("./configuration/AppConfiguration");
const TestRoutes_1 = require("./routes/TestRoutes");
const BookRoutes_1 = require("./routes/BookRoutes");
// Configure Server Application
const app = new AppConfiguration_1.default().app;
// Configure Server Listening
let clientName = "Hawthorn City Library";
const PORT_NUMBER = 5000;
app.listen(PORT_NUMBER, () => {
    console.log(`Simplify™ Express Server Running for ${clientName} on Port ${PORT_NUMBER}.`);
});
// Initialise Routes
const testRoutes = new TestRoutes_1.default(app);
testRoutes.initializeAllRoutes();
const bookRoutes = new BookRoutes_1.default(app);
bookRoutes.initializeAllRoutes();
