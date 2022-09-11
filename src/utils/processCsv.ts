interface Campaign {
  campaign: string
  disposition: string
  calls: number
}

const processCsv = (csv: string) => {
  const json = csv
    .split("\n")
    .map(row => row.split(","))
    .filter((row, i) => {
      if (row.length === 3 && i !== 0) {
        return row
      }
    })
    .map(row => {
      return {
        campaign: row[0],
        disposition: row[1],
        calls: row[2],
      }
    })

  let campaignStats = Object.fromEntries(
    [...new Set(json.map(({ campaign }) => campaign))].map(el => [
      el,
      {
        appointments: 0,
        connections: 0,
        calls: 0,
      },
    ])
  )

  json.forEach(({ campaign, disposition, calls }) => {
    // APPOINTMENTS
    if (/scheduled/.test(disposition.toLowerCase())) {
      campaignStats[campaign]["appointments"] += parseInt(calls)
    }

    // CONNECTIONS

    if (
      /Completed - Scheduled Appointment/.test(disposition) ||
      /Completed - Did Not Schedule Appointment/.test(disposition) ||
      /Did Not Schedule - Follow Up Needed/.test(disposition) ||
      /Able to Reach - Call Back Later/.test(disposition)
    ) {
      campaignStats[campaign]["connections"] += parseInt(calls)
    }

    // CALLS

    campaignStats[campaign]["calls"] += parseInt(calls)
  })

  console.log(campaignStats)
}

export default processCsv
