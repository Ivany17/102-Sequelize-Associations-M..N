const _ = require('lodash');
const { Group } = require('../models');

module.exports.createUserGroup = async(req, rest, next) => {
    try {
        const {body} = req;

        const values = _.pick(body, ['name', 'imagePath', 'description']);

        const group = await Group.create({
            ...values,
            userId: body.userId //'users_to_group'
        })

        rest.status(201).send({data:group})
    } catch (error) {
        next(error)
    }
}