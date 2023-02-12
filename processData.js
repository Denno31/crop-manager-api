// returns ports with new ids
function portsWithNewIdsData(){
  let idx = 1
  let portsWithCoordinatesData = require('./portsWithCoordinates.json')
  portsWithCoordinatesData = portsWithCoordinatesData.map((port)=>{
    port.newId = idx
   idx += 1
    return port
  })
  
  return portsWithCoordinatesData
}

// appends old id to ports
function portsWithNewAndOldIdsData(){
  const portsWithOldIds = require('./portsOldIds.json')
  let portWithNewIdsAndOldIds = portsWithNewIdsData()
  portWithNewIdsAndOldIds = portWithNewIdsAndOldIds.map(port=>{
    let _port = portsWithOldIds.find(_p=> _p.code === port.code)
    port.oldId = _port.id
    return port
  })
  return portWithNewIdsAndOldIds
}

//updates vessel lastPort and destinationPort
function updatedVesselsData() {
  const vessels = require('./vessels.json')
  const portWithNewIdsAndOldIds = portsWithNewAndOldIdsData()
  let updatedVessels = vessels.map(vessel=>{
    let foundPort = portWithNewIdsAndOldIds.find(_p=> _p.oldId===vessel.destinationPort)
    if(foundPort){
      vessel.destinationPort = foundPort.newId
    }else{
       vessel.destinationPort = null
    }
    return vessel
  }).map(vessel=>{
     let foundPort = portWithNewIdsAndOldIds.find(_p=> _p.oldId===vessel.lastPort)
    if(foundPort){
      vessel.lastPort = foundPort.newId
    }else{
      vessel.lastPort = null
    }
    return vessel
  })
  console.log(updatedVessels.length)
  return updatedVessels
}

module.exports = {
  portsWithNewIdsData,
  portsWithNewAndOldIdsData,
  updatedVesselsData
}