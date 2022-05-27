import { Express, Request, Response } from "express";
//mocks
import { margarita, negroni, vodka, mojito, daiquiri } from "./mocks";

const express = require("express");
const app = express();
const cors = require("cors");

const whiteList = [
  "http://192.168.88.40",
  "http://192.168.88.74",
  "https://cocktails-mobs.web.app",
  "http://localhost",
];

const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (whiteList.indexOf(origin) !== 1) {
      callback(null, true);
    } else callback(new Error("Not allowed by CORS"));
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get("/margarita",  (req: Request, res: Response) => {
  res.send(margarita);
  console.log(req.app);
});

app.get("/negroni", (req: Request, res: Response) => {
  res.send(negroni);
  console.log(req.baseUrl);
});

app.get("/vodka", (req: Request, res: Response) => {
  res.send(vodka);
  console.log(req.baseUrl);
});

app.get("/mojito", (req: Request, res: Response) => {
  res.send(mojito);
  console.log(req.baseUrl);
});

app.get("/daiquiri", (req: Request, res: Response) => {
  res.send(daiquiri);
  console.log(req.baseUrl);
});

app.get("/*", (req: Request, res: Response) => {
  res.status(404);
  res.send("nothing there");
  console.log(req.baseUrl);
});

app.listen('8888', () => {
  console.log(`⚡️[server]: Server is running at http://localhost:8888`);
});
