const downloadCsv = (csv: any) => {
  console.log(csv)
  //   const sheetData = csv.map((row: any) => row.join(",")).join("\n")
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)

  const pom = document.createElement("a")
  pom.href = url
  pom.setAttribute("download", `export.csv`)
  pom.click()
}

export default downloadCsv
