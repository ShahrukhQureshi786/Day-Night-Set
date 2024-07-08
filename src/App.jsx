import React from 'react'
import './index.css'

const App = () => {

  let currTime = new Date() //2024, 5, 24, 3....  ye is date me likhna smjh a jai gi just 3 ko change krogy to changing a jai gi
  let actualTime = currTime.getHours()
  let greeting = ''
  const cssStyle = {}

  if(actualTime > 1 && actualTime < 12){
    greeting = 'Good Morning'
    cssStyle.color = "green"
  }else if(actualTime >= 12 && actualTime < 19){
    greeting = "Good Afternoon"
    cssStyle.color = "orange"
  }else{
    greeting = "Good Night"
    cssStyle.color = "maroon"
  }
  return (
    <>
      <section className='main'>
        <div className='greetBox'>
          <h1>Hello Sir! <span style={cssStyle}>{greeting}</span></h1>
        </div>
      </section>
    </>
  )
}

export default App
