import { useEffect, useState } from "react"
import getCsvResponse from "../adapters/getCsvResponse"
import testData from "../data/testData"
import processCsv from "../utils/processCsv"
import classes from "../styles/Report.module.css"
import getTotals from "../utils/getTotals"
import useSearchResults from "../hooks/useSearchResults"
import { useIsAuthenticated } from "@azure/msal-react"
import { useMsal } from "@azure/msal-react"

export type Data = (
  | string
  | {
      appointments: number
      connections: number
      calls: number
    }
)[][]

const Report = () => {
  const [data, setData] = useState<any>()
  const [csvData, setCsvData] = useState()
  const [showTotals, setShowTotals] = useState(false)
  const [totals, setTotals] = useState<any>()

  const isAuthenticated = useIsAuthenticated()

  const { accounts } = useMsal()

  useEffect(() => {
    console.log(accounts[0].username)
    handleRequest()
  }, [])

  const handleRequest = async () => {
    const csv: any = await getCsvResponse(accounts[0].username)
    console.log(csv)
    setCsvData(csv)
    if (typeof csv === "string") {
      const json = processCsv(csv)
      setTotals(getTotals(json))
      json && setData(json)
    }
  }

  return (
    <div className={classes.report}>
      <button
        disabled={totals === undefined}
        onClick={() =>
          alert(
            `Hertz/Grand total seem to be incorrect. Ignore those for now\n\n${JSON.stringify(
              totals,
              null,
              2
            )}`
          )
        }
      >
        Show Totals
      </button>
      <div className={classes.table}>
        <div className={`${classes.row} ${classes.headers}`}>
          <div className={`${classes.cell} ${classes.campaignName}`}>
            Campaign Name
          </div>
          <div className={classes.cell}>appointments</div>
          <div className={classes.cell}>Connections</div>
          <div className={classes.cell}>Dials</div>
          <div className={classes.cell}>Connect Rate</div>
          <div className={classes.cell}>Conversation Rate</div>
        </div>
        {data &&
          data.map((campaign: string | number[]) => (
            <div className={classes.row}>
              <div
                className={`${classes.cell} ${classes.campaignName}`}
              >{`${campaign[0]}`}</div>
              <div className={classes.cell}>{`${campaign[1]}`}</div>
              <div className={classes.cell}>{`${campaign[2]}`}</div>
              <div className={classes.cell}>{`${campaign[3]}`}</div>
              <div className={classes.cell}>{`${campaign[4]}`}</div>
              <div className={classes.cell}>{`${campaign[5]}`}</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Report
