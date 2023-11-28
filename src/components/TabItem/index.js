const TabItem = props => {
  const {eachItem, tabIdCall, isTabActive} = props
  const {tabId, displayText} = eachItem

  const tabOnClick = () => {
    tabIdCall(tabId)
  }
  let listClass
  if (isTabActive === true) {
    listClass = 'tab-item check'
  } else {
    listClass = 'tab-item'
  }

  return (
    <li className={listClass} onClick={tabOnClick}>
      <button type="button"> {displayText}</button>
    </li>
  )
}

export default TabItem
