import React from 'react'
import styled from 'styled-components'

const Note = styled.span`
  color: #8190A5;
`

const NoteWithContent = ({ note }) => {
  return (
    <Note>
      Note: { note }
    </Note>
  )
}

export default NoteWithContent