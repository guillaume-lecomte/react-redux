import React from 'react'

export default ({ bookItem, onClick }) => (
  <li
    onClick={onClick}
  >
    {bookItem.description}
  </li>
)