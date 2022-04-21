const Ticket = require('../Models/TicketModel');

function createTicket(req, res){
    const ticket = new Ticket(req.body);
    ticket.save((err, ticketInfo) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        return res.status(200).send(ticketInfo);
    });
}

function getAllTickets(req, res){
    Ticket.find({}, (err, tickets) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        return res.send(tickets);
    });
}

function getTicket(req, res){
    Ticket.findOne(req.query, (err, ticket) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        return res.send(ticket);
    });
}

function updateTicket(req, res){
    Ticket.findOneAndUpdate(req.query, req.body, (err, ticketUpdated) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        return res.status(200).send(ticketUpdated);
    });
}

function deleteTicket(req, res){
    Ticket.findOneAndRemove(req.query, (err, ticketDeleted) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        return res.status(200).send(ticketDeleted);
    });
}

module.exports = {
    createTicket,
    getAllTickets,
    getTicket,
    updateTicket,
    deleteTicket,
};
