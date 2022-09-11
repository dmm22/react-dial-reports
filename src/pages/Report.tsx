import { useEffect, useState } from "react"
import getCsvResponse from "../adapters/getCsvResponse"
import testData from "../data/testData"
import processCsv from "../utils/processCsv"
import classes from "../styles/Report.module.css"

export type Data = (
  | string
  | {
      appointments: number
      connections: number
      calls: number
    }
)[][]

const Report = () => {
  const [data, setData] = useState<any>(testData)

  useEffect(() => {
    handleRequest()
  }, [])

  const handleRequest = async () => {
    const csv = await getCsvResponse()
    if (typeof csv === "string") {
      const json = processCsv(csv)
      console.log(json)
      json && setData(json)
    }
  }

  const headers = ["Campaign Name", "appointments", "Connections", "Dials"]

  return (
    <div className={classes.report}>
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
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
