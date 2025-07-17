import "dotenv/config.js";
import __dirname from "./utils/utils.js";
//var createError = require('http-errors');
import createError from "http-errors";
import express from "express";
//var express = require('express');
import path from "path";
//var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
import logger from "morgan";
import indexRouter from "./routes/index.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
import passport from "passport"
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
import cors from "cors";

let app = express();
const corsOptions = {
    origin: function (origin, callback) {
        const allowed = process.env.CORS_ORIGIN;

        if (!allowed || allowed === '*') {
            // Permitir cualquier origen
            callback(null, true);
        } else {
            const allowedOrigins = allowed.split(',').map(o => o.trim());
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        }
    },
    credentials: true,
};


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", indexRouter);

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app;
