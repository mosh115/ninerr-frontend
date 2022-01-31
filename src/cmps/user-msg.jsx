import React from 'react'

import { eventBusService } from '../services/event-bus.service.js'


export class UserMsg extends React.Component {

  removeEvent;

  state = {
    msg: null
  }

  componentDidMount() {
    // Here we listen to the event that we emited, its important to remove the listener 
    this.removeEvent = eventBusService.on('show-user-msg', (msg) => {
      this.setState({ msg })
      setTimeout(() => {
        this.setState({ msg: null })
      }, 3000)
    })
  }

  componentWillUnmount() {
    this.removeEvent()
  }

  render() {
    if (!this.state.msg) return <span></span>
    const msgClass = this.state.msg.type || ''
    return (
      <section className={'user-msg flex ' + msgClass}>
        <p>{this.state.msg.txt}</p>
        <button className='btn-x' onClick={() => {
          this.setState({ msg: null })
        }}>x</button>
      </section>
    )
  }
}


// import React, { useEffect, useState } from 'react'

// import { eventBusService } from '../services/event-bus.service.js'


// export function UserMsg() {

//   let removeEvent;
//   const [msg, setMsg] = useState(null)

//   useEffect(() => {
//     removeEvent = eventBusService.on('show-user-msg', (msg) => {
//       setMsg({ msg })
//       setTimeout(() => {
//         setMsg({ msg: null })
//       }, 3000)
//     })
//     return () => {
//       removeEvent()
//     }
//   }, [])
//   console.log(msg)

//   if (!msg) return <span></span>
//   const msgClass = msg.type || ''
//   return (
//     <section className={'user-msg ' + msgClass}>
//       <button onClick={() => {
//         setMsg({ msg: null })
//       }}>x</button>
//       {msg.txt}
//     </section>
//   )

// }
