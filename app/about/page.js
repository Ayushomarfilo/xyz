import React from 'react'
import style from './page.module.css'
import Link from 'next/link'

function page() {
  return (
    <div className={style.main}>About
    <ul>
        <Link href={`https://askfilo.com/`}>
        <li>Information about Filo eduction</li>
        </Link>

        <Link href={`/`}>
        <li>Back to Home page</li>
        </Link>
        <h1></h1>
    </ul>
    </div>
  )
}

export default page