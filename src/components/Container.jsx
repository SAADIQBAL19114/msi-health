import React from 'react'

const Container = ({children, styles=""}) => {
  return (
    <div className={`mx-auto max-w-container px-5 ${styles}`}>{children}</div>
  )
}

export default Container