import {Request, Response} from "express";
import {getRepository} from "typeorm"
import { User } from '../entity/user';

export const getUsers = async (req:Request, res:Response):Promise<Response> =>{
    const users = await getRepository(User).find();
    return res.json(users);
}

export const createUser = async (req:Request, res:Response):Promise<Response> =>{
    const newUser = getRepository(User).create(req.body)
    const results = await getRepository(User).save(req.body);
    return res.json(results);
}

export const getUser = async (req:Request, res:Response):Promise<Response> =>{
    const id = req.params.id
    const user = await getRepository(User).findOne(id);
    return res.json(user);
}

export const updateUser = async (req:Request, res:Response):Promise<Response> =>{
   const user = await getRepository(User).findOne(req.params.id)
   if(user){
    getRepository(User).merge(user, req.body)
     const results = await getRepository(User).save(user)
    return res.json(results);
    }else{
        return res.status(404).json({msg: "Not User found"})
    }
}

export const deleteUser = async (req:Request, res:Response):Promise<Response> =>{
    const id = req.params.id
    const user = await getRepository(User).delete(id);
    return res.json(user);
}