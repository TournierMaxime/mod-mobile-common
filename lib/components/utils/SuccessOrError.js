import React from 'react'
import Message from './Message'

const SuccessOrError = ({ message }) => {
  return message?.success ? (
    <Message message={message?.success} priority={'success'} />
  ) : message?.error ? (
    <Message message={message?.error} priority={'error'} />
  ) : null
}

export default SuccessOrError
