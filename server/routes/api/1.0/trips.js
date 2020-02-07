const express = require('express');
const router = express.Router();
const Event = require('../../../models/event');
const User = require('../../../models/user');
const Trip = require('../../../models/trip');



// Post body should be;
// trip: {}
// events: []
router
    .post('/', (req, res) => {
        const {trip, events}= req.body
        const {start, end, location, description, imgUrl, userId} = trip;
         User.findById(userId).then(user => {
            const tripObject = new Trip({
                start,
                end,
                location,
                description,
                imgUrl,
                eventsForTrip: [],
                userForTrip: user
            });
            events.forEach(event => {
                const {eventDate, description, photos} = event;
                const eventObject =  new Event({
                    eventDate,
                    description,
                    photos,
                })
                tripObject.eventsForTrip.push(eventObject)
            });
            tripObject.save((err, trip) => {
                if(err) console.log(err);
                trip.userForTrip.password = undefined
                res.json(trip)
            }) 
        });

    })
    //5e3b97ad5be3a519d75bb1d2
    .get('/:id', (req,res) => {
        Trip.findById(req.params.id).then((trip) => {
            trip.userForTrip.password = undefined
            res.json(trip)
        }).catch((err) =>
            res.json(err)
        )
    })
    module.exports = router;