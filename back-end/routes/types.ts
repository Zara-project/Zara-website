import express, { Router, Request, Response } from 'express';
import { getTypes } from '../controller/types';

const routert=Router()


routert.post("/types",function(req, res, next) {
    getTypes(req,res);
  });


  export default routert