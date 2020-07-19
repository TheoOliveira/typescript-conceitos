import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function hellowWorld(request: Request, response: Response){
    const user = createUser({
        email: 'theo@theocom.br',
        password: '123123',
        techs: ['node', 'reactjs', 'reac-native']
    })
    return response.json({message: 'Hello Wolrd'})
}