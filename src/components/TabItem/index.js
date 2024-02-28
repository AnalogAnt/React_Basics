// Write your code here
import './index.css'

const TabItem = props => {
  const {tabName, isActive, onTabChange, tabId} = props
  const tabChange = () => {
    onTabChange(tabId)
  }
  const activeTabBtnClassName = isActive ? 'activeButt' : ''
  const activeTabRuleClassName = isActive ? 'activeRule' : ''
  return (
    <li className="tabitem">
      <button
        type="button"
        className={`butt ${activeTabBtnClassName}`}
        onClick={tabChange}
      >
        {tabName}
      </button>
      <hr className={`${activeTabRuleClassName}`} />
    </li>
  )
}

export default TabItem
