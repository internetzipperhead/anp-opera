import React, { useEffect } from 'react'


interface IProps {
  history: {
    go(n: number): void
  }
}

function Refresh(props: IProps) {

  useEffect(() => {
    props.history.go(-1)
  }, [props.history])

  return (<></>)
}

export default Refresh
