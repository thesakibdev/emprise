import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Image from '../../Image'
import John from "../../../assets/john.png"
import Add from "../../../assets/add.png"
import AddTwo from "../../../assets/add-Tow.png"

const Subscribe = () => {
  return (
    <section className='py-16'>
      <Container>
        <Flex>
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
          <div className="w-[45%]"></div>
        </Flex>
      </Container>
    </section>
  )
}

export default Subscribe
