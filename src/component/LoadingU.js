
import LoadingScreen from 'react-loading-screen'
import React from 'react'
function Loading(){
    return (
        <>
        <LoadingScreen
        loading={true}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        logoSrc='https://media.tenor.com/6gHLhmwO87sAAAAj/gg.gif'
        text='UI is loading...'
      > 
     
      </LoadingScreen>
      </>
        
     
    )
}
export default Loading