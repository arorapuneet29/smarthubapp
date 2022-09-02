const sensorInfo = (hub, hubId, sensorId) => {
  const hubDetails = hub?.filter((item) => item.hubId === hubId)
  const sensor = hubDetails?.length > 0
    && hubDetails[0].sensors?.filter((item) => item.sensorId === sensorId)
  const details = sensor?.length > 0 ? sensor[0] : {}
  return details
}

export default sensorInfo
