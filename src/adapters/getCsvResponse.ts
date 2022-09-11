const getCsvResponse = async () => {
  try {
    const response = await fetch(
      "https://little-hypnotic-epoxy.glitch.me/run_report"
    )
    const csv = await response.text()
    return csv
  } catch (err) {
    console.log(err)
  }
}

export default getCsvResponse
