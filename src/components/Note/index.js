import React from 'react'
import styled from 'styled-components'

const Note = styled.span`
  color: #8190A5;
  font-size: 16px;
`

const NoteWithContent = ({ note }) => {
  return (
    <Note>
      { note }
    </Note>
  )
}

export default NoteWithContent