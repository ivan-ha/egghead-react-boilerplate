import React from 'react'
import propTypes from 'prop-types'

class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  }

  static propTypes = {
    children: propTypes.node.isRequired
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  render() {
    const { isError } = this.state
    const { children } = this.props
    return isError ? <div>Boom! Something went wrong!</div> : children
  }
}

export default DefaultErrorBoundary
