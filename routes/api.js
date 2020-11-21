const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      {
        _id: params.id,
      },
      {
        $push: {
          exercises: body,
        },
      }
    )
      .then((updatedWorkout) => {
        res.json(updatedWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

module.exports = router;