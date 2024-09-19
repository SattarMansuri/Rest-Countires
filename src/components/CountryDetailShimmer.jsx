import React, { useContext } from 'react'
import './CountryDetailShimmer.css'
import './CountryDetails.css'
import useTheme from '../hooks/useTheme'

const CountryDetailShimmer = () => {
  const [isDark] = useTheme()
  return (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="country-details-container">
      <div className="country-details">
          <div className='shimmer-flag'></div>
          <div className="details-text-container">
            <div className='shimmer-country-name'></div>
            <div className="details-text">
              <p className='shimmer'></p>
              <p className='shimmer'></p>
              <p className='shimmer'></p>
              <p className='shimmer'></p>
              <p className='shimmer'></p>
              <p className='shimmer'></p>
              <p className='shimmer'></p>
              <p className='shimmer'></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CountryDetailShimmer