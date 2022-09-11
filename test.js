const testData = [
  ["Auto Member Internet Leads Sales OBS", 3, 7, 39],
  ["Castriota Chevrolet Internet Leads Sales OBS", 0, 3, 30],
  ["Hertz Car Sales Albuquerque Internet Leads", 0, 0, 8],
  ["Hertz Car Sales Austin Internet Leads", 2, 4, 12],
  ["Hertz Car Sales Baltimore Internet Leads", 2, 4, 33],
  ["Hertz Car Sales Bedford Internet Leads", 1, 4, 11],
  ["Hertz Car Sales Bonita Springs Internet Leads", 0, 4, 14],
  ["Hertz Car Sales Charlotte Internet Leads", 1, 6, 38],
  ["Hertz Car Sales Clearwater Internet Leads", 0, 1, 14],
  ["Hertz Car Sales Costa Mesa Internet Leads", 2, 2, 7],
  ["Hertz Car Sales Crystal Lake Internet Leads", 1, 1, 3],
  ["Hertz Car Sales Denver Internet Leads", 0, 0, 6],
  ["Hertz Car Sales Des Plaines Internet Leads", 0, 3, 10],
  ["Hertz Car Sales Detroit Internet Leads", 0, 3, 17],
  ["Hertz Car Sales Fort Lauderdale Internet Leads", 0, 2, 26],
  ["Hertz Car Sales Fresno Internet Leads", 0, 2, 12],
  ["Hertz Car Sales Hartford Internet Leads", 0, 1, 19],
  ["Hertz Car Sales Hayward Internet Leads", 0, 0, 14],
  ["Hertz Car Sales Houston Internet Leads", 0, 1, 4],
  ["Hertz Car Sales Houston South Internet Leads", 1, 2, 9],
  ["Hertz Car Sales Indianapolis Internet Leads", 1, 2, 18],
  ["Hertz Car Sales Inglewood Internet Leads", 0, 1, 11],
  ["Hertz Car Sales Jacksonville Internet Leads", 0, 0, 15],
  ["Hertz Car Sales Johnston Internet Leads", 0, 0, 13],
  ["Hertz Car Sales Kearny Mesa Internet Leads", 0, 2, 13],
  ["Hertz Car Sales Las Vegas Internet Leads", 0, 2, 11],
  ["Hertz Car Sales Lynn Internet Leads", 0, 0, 16],
  ["Hertz Car Sales Memphis Internet Leads", 2, 2, 5],
  ["Hertz Car Sales Mesquite Internet Leads", 1, 1, 7],
  ["Hertz Car Sales Minneapolis Internet Leads", 1, 1, 5],
  ["Hertz Car Sales Morrow Internet Leads", 1, 4, 15],
  ["Hertz Car Sales Nashville Internet Leads", 1, 2, 10],
  ["Hertz Car Sales New Orleans Internet Leads", 0, 0, 5],
  ["Hertz Car Sales Norwalk Internet Leads", 1, 3, 15],
  ["Hertz Car Sales Oklahoma City Internet Leads", 0, 0, 1],
  ["Hertz Car Sales Orlando Internet Leads", 0, 0, 33],
  ["Hertz Car Sales Philadelphia Internet Leads", 0, 0, 11],
  ["Hertz Car Sales Phoenix West Bell Internet Leads", 1, 3, 9],
  ["Hertz Car Sales Pittsburgh Internet Leads", 1, 1, 18],
  ["Hertz Car Sales Pleasanton Internet Leads", 1, 1, 9],
  ["Hertz Car Sales Portland Internet Leads", 0, 1, 16],
  ["Hertz Car Sales R2B New York Internet Leads", 0, 1, 6],
  ["Hertz Car Sales Richmond Internet Leads", 0, 1, 20],
  ["Hertz Car Sales Riverside Internet Leads", 1, 2, 18],
  ["Hertz Car Sales Rockville Centre Internet Leads", 0, 3, 12],
  ["Hertz Car Sales Roseville Internet Leads", 1, 1, 16],
  ["Hertz Car Sales Sacramento Internet Leads", 0, 2, 6],
  ["Hertz Car Sales Salt Lake City Internet Leads", 0, 0, 4],
  ["Hertz Car Sales San Antonio Northeast Internet Leads", 0, 2, 8],
  ["Hertz Car Sales San Diego Internet Leads", 0, 0, 6],
  ["Hertz Car Sales Sanford Internet Leads", 1, 5, 16],
  ["Hertz Car Sales Santa Clara Internet Leads", 1, 3, 11],
  ["Hertz Car Sales Scottsdale Internet Leads", 2, 2, 5],
  ["Hertz Car Sales Seattle Internet Leads", 0, 1, 9],
  ["Hertz Car Sales Smithtown Internet Leads", 0, 2, 13],
  ["Hertz Car Sales Springfield Internet Leads", 0, 0, 14],
  ["Hertz Car Sales St. Louis Internet Leads", 1, 1, 3],
  ["Hertz Car Sales Stockton Internet Leads", 1, 2, 21],
  ["Hertz Car Sales Stone Mountain Internet Leads", 0, 0, 11],
  ["Hertz Car Sales Tampa Internet Leads", 0, 4, 13],
  ["Hertz Car Sales Torrance Internet Leads", 1, 3, 19],
  ["Hertz Car Sales Ventura Internet Leads", 2, 4, 17],
  ["Hertz Car Sales Warminster Internet Leads", 0, 1, 17],
  ["Hertz Car Sales Winston Salem Internet Leads", 0, 0, 25],
  ["Off Lease Only Bradenton Internet Leads Sales OBS", 4, 6, 60],
  ["Off Lease Only Orlando Internet Leads Sales OBS", 5, 22, 140],
  ["Suncoast Chrysler Dodge Jeep Ram Lease Renewal OBS", 0, 1, 9],
  ["Suncoast Chrysler Dodge Jeep Ram Positive Equity OBS", 1, 3, 18],
]

// campaign, appointments, connections, calls
// connect rate = connections/dials
// conversion rate = appts / connections

const getTotals = () => {
  const totals = {
    Hertz: 0,
    "OLO Bradenton": 0,
    "OLO Orlando": 0,
    "Auto Member": 0,
    Castriota: 0,
    HOLA: 0,
  }

  testData.forEach(([campaignName, appointments, contacts, dials]) => {
    if (/Hertz/.test(campaignName)) {
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

  console.log(totals)
}
getTotals()
