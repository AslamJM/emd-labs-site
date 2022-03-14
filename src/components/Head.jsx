import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({title,description}) => {
  return (
    <Helmet title={`${title} | EMD Labs`}>
      <meta name='description' content={description}/>
    </Helmet>
  )
}

export default Head