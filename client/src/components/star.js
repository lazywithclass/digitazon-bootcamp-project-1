import React, {useState, useEffect} from 'react';

export default function Star(props) {
  let [enabled, setEnabled] = useState(false)

  useEffect(() => {
    async function call() {
      setEnabled(localStorage.getItem(`star-${props.id}`) == 'enabled')
    }

    call()
  })

  function toggleClick() {
    let current = localStorage.getItem(`star-${props.id}`)
    if (current == 'enabled') {
      localStorage.setItem(`star-${props.id}`, 'disabled')
      setEnabled(false)
    } else {
      localStorage.setItem(`star-${props.id}`, 'enabled')
      setEnabled(true)
    }
  }

  return (
    <img className="star" onClick={toggleClick} src={enabled ? 'img/star-enabled.png' : 'img/star-disabled.png' } />
  )
}
