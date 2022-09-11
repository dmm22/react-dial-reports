import { useEffect, useState } from "react"
import getCsvResponse from "../adapters/getCsvResponse"
import processCsv from "../utils/processCsv"

interface Data {
  campaign: string
  disposition: string
  calls: number
}

const Report = () => {
  //   const [response, setResponse] = useState<string | Data[]>()

  useEffect(() => {
    handleRequest()
  }, [])

  const handleRequest = async () => {
    const csv = await getCsvResponse()
    if (typeof csv === "string") {
      const json = processCsv(csv)
    }
  }

  return (
    // <>{response && typeof response === "string" && <div>{response}</div>}</>
    <></>
  )
}

export default Report
