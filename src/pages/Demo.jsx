import { useState, useRef } from "react"
import classes from "../styles/Demo.module.css"

const Demo = () => {
  const [groupNameInput, setGroupNameInput] = useState("")
  const [groups, setGroups] = useState([])
  const inputRef = useRef()

  const campaigns = [
    "Off Lease Only Bradenton Internet Leads Sales OBS",
    "Off Lease Only Orlando Internet Leads Sales OBS",
    "Suncoast Chrysler Dodge Jeep Ram Lease Renewal OBS",
    "Suncoast Chrysler Dodge Jeep Ram Positive Equity OBS",
    "Auto Member Internet Leads Sales OBS",
    "Castriota Chevrolet Internet Leads Sales OBS",
    "Hertz Car Sales Albuquerque Internet Leads",
    "Hertz Car Sales Austin Internet Leads",
    "Hertz Car Sales Baltimore Internet Leads",
    "Hertz Car Sales Bedford Internet Leads",
  ]

  const addGroup = () => {
    setGroups(groups => [...groups, groupNameInput: []])
    setGroupNameInput("")
    inputRef.current.focus()
  }

  const deleteGroup = () => {}

  return (
    <div className={classes.container}>
      <div className={classes.inputWrapper}>
        <label>New Group Name</label>
        <input
          ref={inputRef}
          onChange={e => setGroupNameInput(e.target.value)}
          value={groupNameInput}
          type="text"
        />
        <button onClick={addGroup}>Add Group</button>
      </div>
      <div className={classes.groupWrapper}>
        {groups &&
          groups.map(group => {
            return (
              <div className={classes.group}>
                <h4>{group}</h4>
              </div>
            )
          })}
      </div>
      <div className={classes.campaignWrapper}>
        {campaigns &&
          campaigns.map((campaign, i) => {
            return (
              <div className={classes.campaignRow}>
                <div className={classes.campaignName}>{campaign}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Demo
