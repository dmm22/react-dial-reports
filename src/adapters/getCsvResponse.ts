const getCsvResponse = async (username: string) => {
  try {
    const response = await fetch(
      "https://little-hypnotic-epoxy.glitch.me/run_report",
      {
        headers: {
          Authorization: username,
        },
      }
    )
    const csv = await response.text()
    console.log(csv)
    return csv
  } catch (err) {
    console.log(err)
  }
}

export default getCsvResponse
