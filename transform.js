const portsWithCoords = require("./portsWithCoordinates.json");
const portsWithOldIds = require("./portsOldIds.json");
const vessels = require("./vessels.json");
const fs = require("fs");

const transformVessels = () => {
  const portsWithCoordsAndIdsAndOldIds = portsWithCoords.map((newPort, i) => ({
    ...newPort,
    newId: i + 1,
    oldId: portsWithOldIds.find((oldPort) => oldPort.code === newPort.code).id,
  }));

  const vesselsWithUpdatedIds = vessels.map((vessel) => ({
    ...vessel,
    destinationPort: portsWithCoordsAndIdsAndOldIds.find(
      (port) => port.oldId === vessel.destinationPort
    )
      ? portsWithCoordsAndIdsAndOldIds.find(
          (port) => port.oldId === vessel.destinationPort
        ).newId
      : null,
    lastPort: portsWithCoordsAndIdsAndOldIds.find(
      (port) => port.oldId === vessel.lastPort
    )
      ? portsWithCoordsAndIdsAndOldIds.find(
          (port) => port.oldId === vessel.lastPort
        ).newId
      : null,
  }));

  console.log(vesselsWithUpdatedIds);

  try {
    fs.writeFileSync(
      `./transformed.json`,
      JSON.stringify(vesselsWithUpdatedIds)
    );
  } catch (err) {
    console.error(err);
  }
};

transformVessels();