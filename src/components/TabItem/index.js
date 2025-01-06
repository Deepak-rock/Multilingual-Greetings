import './index.css'

const TabItem = props => {
  const {languageGreetings, updateActiveTabId, isActive} = props
  const {buttonText, id} = languageGreetings
  const customBtn = isActive ? 'active' : 'button'
  const onClickTab = () => {
    updateActiveTabId(id)
  }
  return (
    <li>
      <button type="button" className={customBtn} onClick={onClickTab}>
        {buttonText}
      </button>
    </li>
  )
}
export default TabItem
