//Criação da variável express para trabalhar com as rotas
const express = require('express');
//Criação da variável multer para trabalhar com o upload de fotos
const multer = require('multer');
//Criação da variável uploadConfig importando arquivo upload.js
const uploadConfig = require('./config/upload');

//Criação das variáveis dos controllers que serão chamados a seguir
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

//Criação da variável routes para trabalhar com os protocolos http
const routes = express.Router();
//Criação da variável upload instanciando a função da variável multer e passando a uploadConfig
const upload = multer(uploadConfig);

//Rotas para acesso na plataforma web e mobile
routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

//Export nas rotas
module.exports = routes;