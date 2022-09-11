import { useState, useEffect } from "react"

const useSearchResults = (initial: any) => {
  const [searchList, setSearchList] = useState<any>(initial)
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    console.log(searchList)
  }, [searchList])

  const query = (text: string) => setSearchText(text)

  // const searchResults = () => {
  //   if (query) {
  //     return searchList?.filter((result: any) =>
  //       new RegExp(query.toLowerCase()).test(result[0].toLowerCase())
  //     )
  //   } else return searchList
  // }

  const searchResults = () => {
    // if (query) {
    // }
    return searchList
  }

  return [searchResults, setSearchList, query] as const
}

export default useSearchResults
