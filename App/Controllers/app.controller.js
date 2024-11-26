const Members = require('../Models/app.model.members.js');
const Requests = require('../Models/app.model.request.js');
const Services = require('../Models/app.model.services.js');

exports.getAllServices = (req, res) => {
    Services.find()
        .then((services) => {
            res.status(200).json(services);
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "An error occurred while fetching the services.",
            });
        });
};

exports.getServiceByType = (req, res) => {
    Services.find({ type: req.params.type })
        .then((services) => {
            res.status(200).json(services);
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "An error occurred while retrieving the service.",
            });
        });
};

exports.createRequest = (req, res) => {
    const newRequest = new Requests(req.body);
    newRequest
        .save()
        .then((request) => {
            res.status(201).json({
                message: "Request submitted successfully.",
                data: request,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "An error occurred while adding the request.",
            });
        });
};

exports.registerMember = (req, res) => {
    Members.create(req.body)
        .then((member) => {
            res.status(201).json({
                message: "Member registered successfully.",
                data: member,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "An error occurred while registering the member.",
            });
        });
};

exports.calculateEMI = (req, res) => {
    const emi = req.body.amt / req.body.tenure;
    res.status(200).json({ emi });
};

exports.updateRequest = (req, res) => {
    Requests.findOneAndUpdate(
        { mobile: req.body.mobile },
        { code: req.body.code, type: req.body.type, msg: req.body.msg },
        { new: true }
    )
        .then((request) => {
            res.status(200).json({
                message: "Request updated successfully.",
                data: request,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "An error occurred while updating the request.",
            });
        });
};

exports.updatePassword = (req, res) => {
    Members.findOneAndUpdate(
        { mobile: req.body.mobile },
        { createpassword: req.body.createpassword },
        { new: true }
    )
        .then((member) => {
            res.status(200).json({
                message: "Password updated successfully.",
                data: member,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "An error occurred while updating the password.",
            });
        });
};

exports.deleteRequest = (req, res) => {
    Requests.findOneAndDelete({ mobile: req.body.mobile })
        .then((request) => {
            res.status(200).json({
                message: "Request deleted successfully.",
                data: request,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "An error occurred while deleting the request.",
            });
        });
};

exports.deleteMember = (req, res) => {
    Members.findOneAndDelete({ mobile: req.body.mobile })
        .then((member) => {
            res.status(200).json({
                message: "Member deleted successfully.",
                data: member,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "An error occurred while deleting the member.",
            });
        });
};
