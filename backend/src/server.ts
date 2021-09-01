// Import Classes
import { Application } from "express";
import AppConfiguration from "./configuration/AppConfiguration";
import Routes from "./routes/Routes";
import TestRoutes from "./routes/TestRoutes";
import BookRoutes from "./routes/BookRoutes";

// Configure Server Application
const app: Application = new AppConfiguration().app;

// Configure Server Listening
let clientName: string = "Hawthorn City Library";
const PORT_NUMBER: number = 5000;

app.listen(PORT_NUMBER, () => {
    console.log(`Simplify™ Express Server Running for ${clientName} on Port ${PORT_NUMBER}.`);
})

// Initialise Routes
const testRoutes: TestRoutes = new TestRoutes(app);
testRoutes.initializeAllRoutes();

const bookRoutes: BookRoutes = new BookRoutes(app);
bookRoutes.initializeAllRoutes();