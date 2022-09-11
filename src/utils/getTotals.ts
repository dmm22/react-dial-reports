const getTotals = (data: any[]) => {
  const totals = {
    Hertz: 0,
    "OLO Bradenton": 0,
    "OLO Orlando": 0,
    "Auto Member": 0,
    Castriota: 0,
    HOLA: 0,
  }

  data.forEach(([campaignName, appointments, contacts, dials]) => {
    if (/Hertz/.test(campaignName) && /Internet/.test(campaignName)) {
      totals["Hertz"] += dials
    }

    if (/Only Bradenton/.test(campaignName)) {
      totals["OLO Bradenton"] += dials
    }

    if (/Only Orlando/.test(campaignName)) {
      totals["OLO Orlando"] += dials
    }

    if (/Auto Member/.test(campaignName)) {
      totals["Auto Member"] += dials
    }

    if (/Castriota/.test(campaignName)) {
      totals["Castriota"] += dials
    }
  })

  const holaTotal = Object.values(totals).reduce((acc, el) => {
    return acc + el
  }, 0)
  totals["HOLA"] = holaTotal
  return totals
}

export default getTotals
