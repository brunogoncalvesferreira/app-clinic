import { Router } from 'express';
import { UsersController } from '../controller/users/usersController';
import { DoctorController } from '../controller/doctor/doctorController';
import { SessionsController } from '../controller/sessions/sessionsController';
import { ensureAuthenticate } from '../middleware/ensureAuthenticate';
import { ConsultsController } from '../controller/consults/consultsController';

const routes = Router();

const createUser = new UsersController()
const createDoctor = new DoctorController()
const consult = new ConsultsController()

const sessionsController = new SessionsController()

// Rotas usuários
routes.post('/users', createUser.create)
routes.get('/users', ensureAuthenticate, createUser.index)
routes.get('/users/:id', createUser.show)
routes.delete('/users/:id', ensureAuthenticate, createUser.delete)

// Rotas Doutores
routes.post('/doctor', ensureAuthenticate, createDoctor.create)
routes.get('/doctor', ensureAuthenticate, createDoctor.index)

// Rotas Consultas
routes.post('/consults', ensureAuthenticate, consult.create)
routes.get('/consults', ensureAuthenticate, consult.index)
routes.delete('/consults/:id', ensureAuthenticate, consult.delete)

// Rota contoller de sessão
routes.post('/sessions', sessionsController.create)



export default routes