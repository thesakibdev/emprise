import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Image from '../../Image'
import John from "../../../assets/john.png"
import Add from "../../../assets/add.png"
import AddTwo from "../../../assets/add-Tow.png"
import ContactInput from '../../ContactInput'

const Subscribe = () => {
  return (
    <section className='py-16'>
      <Container>
        <Flex className="justify-between">
          <div className="w-[50%]">
            <Flex className="justify-between">
              <div className="w-[376px] h-[624px] rounded-[8px]">
                <Image src={John} alt="guides" className="w-full h-full" />
              </div>
              <div className="w-[376px] h-[624px] rounded-[8px]">
                <Flex className=" gap-[30px] flex-col">
                  <Image src={AddTwo} alt="add" className="w-full h-[296px]" />
                  <Image src={Add} alt="add" className="w-full h-[296px]" />
                </Flex>
              </div>
            </Flex>
          </div>
          <div className="w-[45%] pt-9">
            <h3 className='text-BrandOne text-2xl'>Subscribe For Offers</h3>

            <h1 className='text-OxfordBlue font-semibold text-5xl my-6 pr-40'>Adventures Calling You Guys!</h1>

            <p className='text-CadetGray text-2xl pr-[200px]'>The Brilliant reasons Estrada should be your one-stop-shop!</p>
            <ContactInput className="mt-16 mb-12" />
            <p className='text-StatGray text-base'>Expect a reply in 2-3 working days</p>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Subscribe
