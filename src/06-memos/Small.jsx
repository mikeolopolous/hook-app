import { memo } from 'react'

export const Small = memo(({ value }) => {

  console.log('me volví a pintar')

  return (
    <small>{ value }</small>
  )
})
