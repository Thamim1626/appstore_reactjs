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
      {displayText}
    </li>
  )
}

export default TabItem
