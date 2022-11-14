import { Button } from '@mui/material';
import React from 'react'

function BreadcrumbHome({props}) {
    const { history } = props;
  return (
    <div>
      <Button onClick={() => history.push("/Spiritueux")}>ABOUT</Button>
    </div>
  )
}

export default BreadcrumbHome
