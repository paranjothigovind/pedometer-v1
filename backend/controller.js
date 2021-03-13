const sensorCounter = require("./model");

exports.triggerSteps = (req, res) => {
  const sensor = new sensorCounter();
  sensor.save((err, client) => {
    if (err) {
      console.log(err);
      return res.status(200).json({
        message: "some error",
      });
    }
    // user.salt = undefined;
    return res.json({
      message: "Success",
      sensor,
    });
  });
};

exports.fetchSteps = (req, res) => {
  sensorCounter.findOne({ _id: req.body._id }).then((data) => {
    console.log(data);
    if (data.steps <= 20) {
      var i = 1;
      const makeRequest = (i) => {
        sensorCounter
          .findOneAndUpdate({ _id: req.body._id }, { steps: i })
          .then((data) => console.log(data));
      };

      setInterval(() => {
        if (i >= 20) {
          res.status(200).json({ message: "Acheived goal already !!" });
        } else {
          makeRequest(i);
          i++;
          if (i == 20) {
            res.status(200).json({ message: "Completed" });
          }
        }
      }, 1000);
    } else {
      res.status(200).json({ message: "Acheived goal already !!" });
    }
  });

  // sensorCounter.findOneAndUpdate({ _id: req.body._id },{ steps: i }).then((data) => console.log(data))
};

exports.findCounter = (req, res) => {
  sensorCounter
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      res.status(200).json({ message: "Success", data });
    });
};
