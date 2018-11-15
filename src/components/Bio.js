import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Artsy logo`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(1.2),
            height: rhythm(1.2),
          }}
        />
        <p
        style={{
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
          A place for Artsyers to learn about art collecting and share resources.{' '}
        </p>
      </div>
    )
  }
}

export default Bio
