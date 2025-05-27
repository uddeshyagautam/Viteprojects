function adn1() {
  return (
    <div style={{ background: '#dfe6e9', height: '100bvh' }}>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />
    </div>
  )
}
//the component isnt re-rendering
//because we havent used a state variable
const ToggleMessage = () => {
  const [notificationCount, setNotificationCount] = useState(true)
  //const [isVisible, setIsVisible] = useState(false) //defining a new state variable
  //when the value of a state variable changes,
  // the component that uses the state variables re-renders
  console.log('re-render')
  //function toggle() {
  function increment() {
    //setIsVisible(!isVisible)
    setNotificationCount(notificationCount + 1)
  }

  return (
    <div>
      <button onClick={increment}>toggle message</button>
      {notificationCount}
    </div>
  )
}
