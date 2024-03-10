import Container from "../../Container";
import Flex from "../../Flex";
import { FaCheck, FaStar } from "react-icons/fa";

const Result = () => {
  return (
    <section className="pt-12 pb-32">
      <Container>
        <Flex>
          <aside className="w-1/4 py-9 px-12 border border-[#E9ECEF] rounded-[16px]">
            {/* input field */}
            <p>Where are you traveling?</p>
            <input type="date" name="" id="" className="border rounded-md" />
            {/* input field */}
            {/* tag */}
            <div>
              <h3>Popular Tags</h3>
              <Flex className="flex-col gap-5">
                <div className="flex gap-4">
                  <label
                    htmlFor="check-box-1"
                    className="cursor-pointer relative"
                  >
                    <input
                      type="checkbox"
                      id="check-box-1"
                      className="w-6 h-6 appearance-none border-[2px] rounded-[8px] border-GainsBoro"
                    />
                    <FaCheck className="text-BrandOne absolute top-1 left-1 text-opacity-0 check-1 transition" />
                  </label>
                  <label>Child Friendly</label>
                </div>

                <div className="flex gap-4">
                  <label
                    htmlFor="check-box-1"
                    className="cursor-pointer relative"
                  >
                    <input
                      type="checkbox"
                      id="check-box-1"
                      className="w-6 h-6 appearance-none border-[2px] rounded-[8px] border-GainsBoro"
                    />
                    <FaCheck className="text-BrandOne absolute top-1 left-1 text-opacity-0 check-2 transition" />
                  </label>
                  <label>Taking extra precautions</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Away from the chaos</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Epic Challenges</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Virtual Experiences</label>
                </div>
              </Flex>
            </div>

            {/* price range */}
            <div className="">
              <h3>Price Range</h3>
              <input type="range" />
              <Flex>
                <div>$ 250</div>
                <span>-</span>
                <div>$ 7500</div>
              </Flex>
            </div>

            {/* duration */}
            <div>
              <h3>Duration</h3>
              <Flex className="flex-col">
                <div>
                  <input type="checkbox" />
                  <label>Upto 1 Hour</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>1 to 4 Hours</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>4 Hours to 1 Day</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>1 to 3 Days</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>3 Days or More</label>
                </div>
              </Flex>
            </div>

            {/* Tour Rating */}
            <div>
              <h1>Tour Rating</h1>
              <Flex className="flex-col">
                <div>
                  <Flex>
                    <input type="checkbox" />
                    <Flex className="text-GainsBoro">
                      <FaStar className="text-BrandTwo" />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </Flex>
                  </Flex>
                </div>

                <div>
                  <Flex>
                    <input type="checkbox" />
                    <Flex className="text-GainsBoro">
                      <FaStar className="text-BrandTwo" />
                      <FaStar className="text-BrandTwo" />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </Flex>
                  </Flex>
                </div>

                <div>
                  <Flex>
                    <input type="checkbox" />
                    <Flex className="GainsBoro">
                      <FaStar className="text-BrandTwo" />
                      <FaStar className="text-BrandTwo" />
                      <FaStar className="text-BrandTwo" />
                      <FaStar />
                      <FaStar />
                    </Flex>
                  </Flex>
                </div>

                <div>
                  <Flex>
                    <input type="checkbox" />
                    <Flex className="text-GainsBoro">
                      <FaStar className="text-BrandTwo" />
                      <FaStar className="text-BrandTwo" />
                      <FaStar className="text-BrandTwo" />
                      <FaStar className="text-BrandTwo" />
                      <FaStar />
                    </Flex>
                  </Flex>
                </div>

                <div>
                  <Flex>
                    <input type="checkbox" />
                    <Flex className="">
                      <FaStar className="text-BrandTwo" />
                      <FaStar className="text-BrandTwo" />
                      <FaStar className="text-BrandTwo" />
                      <FaStar className="text-BrandTwo" />
                      <FaStar className="text-BrandTwo" />
                    </Flex>
                  </Flex>
                </div>
              </Flex>
            </div>

            {/* age Group */}
            <div>
              <h3>Age Group</h3>
              <Flex className="flex-col">
                <div>
                  <input type="checkbox" />
                  <label>1 & Up</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>3 & Up</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>7 & Up</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>13 & Up</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>18 & Up</label>
                </div>
              </Flex>
            </div>

            {/* specials */}
            <div>
              <h3>Specials</h3>
              <Flex className="flex-col">
                <div>
                  <input type="checkbox" />
                  <label>Discounted deals</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Free Cancellations</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Private Groups</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>New on Entrada</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Entrada Specials</label>
                </div>
              </Flex>
            </div>
          </aside>
          <main></main>
        </Flex>
      </Container>
    </section>
  );
};

export default Result;
