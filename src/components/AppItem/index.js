// Write your code here
import './index.css'

const AppItem = props => {
  const {appImg, appName} = props
  return (
    <li className="appitem">
      <img src={appImg} alt={appName} className="appimg" />
      <p className="appname">{appName}</p>
    </li>
  )
}

export default AppItem
