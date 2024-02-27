import Container from "../../Container";
import Heading from "../../Heading";
import Flex from "../../Flex";

// font
import { FaHeadphonesAlt, FaRegQuestionCircle  } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-32 md:pb-36 pb-8">
      <div className="text-center">
        <Container>
          {/* heading */}
          <Heading
            title="Still have a question?"
            className="text-[40px] font-bold"
          />
          <p className="text-2xl text-SlateGray">
            The Brilliant reasons Entrada should be your one-stop-shop!
          </p>

          {/* content */}
          <Flex className="pt-16 justify-around">
            <div className="bg-BrandOne text-center pt-[72px] pb-[66px] rounded-[20px] w-[648px]">
              <div className=" mx-auto w-[106px] h-[106px] rounded-full bg-white  flex items-center justify-center">
                <FaHeadphonesAlt className="text-[56px] text-BrandOne" />
              </div>
              <h3 className="text-[32px] text-white font-medium mt-[56px] mb-7">For Sales</h3>
              <p className="px-[141px] mb-12 text-Celesta text-2xl">The Brilliant reasons Entrada be your one-stop-shop!</p>
              <p className="text-white font-medium text-2xl">sales@entrada.com</p>
              <p className="text-white font-medium text-2xl">+977(985) 456-32-12</p>
            </div>

            <div className="bg-OxfordBlue text-center pt-[72px] pb-[66px] rounded-[20px] w-[648px]">
              <div className=" mx-auto w-[106px] h-[106px] rounded-full bg-white  flex items-center justify-center">
                <FaRegQuestionCircle  className="text-[56px] text-OxfordBlue" />
              </div>
              <h3 className="text-[32px] text-white font-medium mt-[56px] mb-7">Help & Support</h3>
              <p className="px-[141px] mb-12 text-CadetGray text-2xl">The Brilliant reasons Entrada be your one-stop-shop!</p>
              <p className="text-white font-medium text-2xl">help@entrada.com</p>
              <p className="text-white font-medium text-2xl">+977(985) 456-32-12</p>
            </div>
            
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
