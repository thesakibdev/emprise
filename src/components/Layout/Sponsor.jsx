import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Partners from "../../assets/Partners.png"

const Sponsor = () => {
  return (
    <section className='py-16'>
        <Container>
            <div className="">
                <Image src={Partners} alt="partners" />
            </div>
        </Container>
    </section>
  )
}

export default Sponsor