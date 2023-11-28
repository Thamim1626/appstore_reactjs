const AppItem = props => {
  const {eachItem} = props

  const {appName, imageUrl} = eachItem

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
