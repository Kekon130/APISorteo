const { Router } = require('express');
const ticketController = require('../Controllers/ticketController');

const router = Router();

router.post('/createTicket', ticketController.createTicket);
router.get('/getAll', ticketController.getAllTickets);
router.get('/getTicket', ticketController.getTicket);
router.get('/getAllTicketsAllInfo', ticketController.getAllTicketsAllInfo);
router.get('/getTicketAllInfo', ticketController.getTicketAllInfo);
router.patch('/updateTicket', ticketController.updateTicket);
router.delete('/deleteTicket', ticketController.deleteTicket);

module.exports = router;
