import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Loading = () => {
  return (
    <>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-3">
          <div className="card-text-start">
          <Skeleton width='100%' height={10} />
            <div className="card-body">
              <Skeleton width='100%' height={10} count={8} />
            </div>
            <div className="card-footer">
              <Skeleton width='100%' height={10} count={2} />
            </div>
          </div>    
        </div>
    </>
  )
}

export default Loading