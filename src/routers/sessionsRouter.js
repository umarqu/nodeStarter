import express from 'express';
import { readFile } from "fs/promises";

const sessions = JSON.parse(await readFile('../data/sessions.json'))
const sessionRouter = express.Router()

sessionRouter.route('/')
    .get((req,res)=>{
        res.send({session});
    });

sessionRouter.route('/:id')
    .get((req,res)=>{
        const id = req.params.id
        res.render('session', {
            session: sessions[id],
        })
    })

export default sessionRouter;