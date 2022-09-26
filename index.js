const express = require("express");
const app = express();

const port = process.env.PORT ?? 5000;
const {
  locations,
  celestialBodyInfo,
  beaches,
  beachActivities,
  coves,
  cavernMaps,
} = require("./data");

app.get("/locs/:id", (req, res) => {
  res.send(locations.find((l) => l.id == req.params.id));
});

app.get("/locs/", (req, res) => {
  res.send(locations);
});
app.get("/locs/:id/celestial", (req, res) => {
  res.send(celestialBodyInfo.find((l) => l.id == req.params.id));
});

app.get("/beaches", (req, res) => {
  res.send(beaches);
});
app.get("/beaches/:name/", (req, res) => {
  res.send(beaches.find((b) => b.name == req.params.name));
});
app.get("/beaches/:name/activities", (req, res) => {
  const beach = beaches.find((b) => b.name == req.params.name);
  if (beach) {
    let activities = [];
    beach.activities.forEach((a) => {
      const activity = beachActivities.find((ba) => ba.id == a.id);
      if (activity) activities.push({ ...activity, place: a.place });
    });
    res.send(activities);
  } else {
    res.send("No beach found");
  }
});
app.get("/maps/:lat/:long", (req, res) => {
  const cavernMap = cavernMaps.find(
    (cm) => cm.lat == req.params.lat && cm.long == req.params.long
  );
  if (cavernMap) res.send(cavernMap.vector);
  else res.send("No cavern map found");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
