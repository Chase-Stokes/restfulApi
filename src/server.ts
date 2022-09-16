import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';

//connect to mongo
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('connected');
    })
    .catch((error) => {
        console.log(error);
    });
