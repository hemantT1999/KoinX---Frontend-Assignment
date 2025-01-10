import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-2">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">
          About Bitcoin
        </div>
        <div className="mt-6 ">
          <div className="text-lg font-bold text-[#0B1426]">
            What is Bitcoin?
          </div>
          <div className="mt-2 pb-4 text-[#3E424A] font-medium border-b-2 border-[#C9CFDD]/40">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </div>
        </div>
        <div className="mt-2 border-b-2 border-[#C9CFDD]/40 pb-4">
          <div className="text-lg text-[#0B1426] font-bold">Bitcoin</div>
          <div className="text-[#3E424A] font-medium mt-2">
            Bitcoin (BTC) is a cryptocurrency (a virtual currency) designed to
            act as money and a form of payment outside the control of any one
            person, group, or entity. This removes the need for trusted
            third-party involvement (e.g., a mint or bank) in financial
            transactions.
          </div>

          <div className="mt-6 text-[#3E424A] font-medium">
            Bitcoin is a cryptocurrency, a peer-to-peer digital currency that
            operates independently of a central governing authority. Bitcoin
            enables direct transactions between users, secured by cryptographic
            technology and recorded on a transparent and immutable ledger known
            as the blockchain.
          </div>
          <div className="mt-6 text-[#3E424A] font-medium">
            Bitcoin is a digital asset and a payment system that is used as a
            form of Internet currency. It allows for anonymous payment from one
            person to another and is therefore a preferred payment method for
            criminal actions on the Internet.
          </div>
        </div>

        <div className="mt-2 py-2">
          <div className="text-[#0F1629] text-2xl font-semibold">
            Already Holding Bitcoin?
          </div>
          <div className="lg:flex border-b-2 border-[#C9CFDD]/40 pb-4">
            <div className="mt-4">
              <div className="lg:w-[400px] h-[151px] bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] rounded-lg flex">
                <div className="items-center p-4 flex flex-col justify-center mr-10">
                  <div className="text-white text-xl">
                    Calculate your Profits
                  </div>
                  <a
                    href="https://www.google.com/search?q=bitcoin+calculator&rlz=1C1VDKB_enIN1070IN1071&oq=bitcoin+ca&gs_lcrp=EgZjaHJvbWUqEAgAEAAYkQIYsQMYgAQYigUyEAgAEAAYkQIYsQMYgAQYigUyDwgBEAAYChiRAhiABBiKBTINCAIQABiRAhiABBiKBTINCAMQABiRAhiABBiKBTIGCAQQRRg5MgoIBRAAGLEDGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEJOTAxNGowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-3 py-2 rounded-lg mt-3 flex items-center"
                  >
                    Check Now
                    <FaArrowRight className="ml-2 font-normal" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 lg:ml-8">
              <div className="lg:w-[400px] h-[151px] bg-gradient-to-br from-[#FF9865] to-[#EF3031] rounded-lg flex">
                <div className="items-center p-4 flex flex-col justify-center mr-10">
                  <div className="text-white text-xl">
                    Calculate your tax liability
                  </div>
                  <a
                    href="https://www.google.com/search?q=bitcoin+calculator&rlz=1C1VDKB_enIN1070IN1071&oq=bitcoin+ca&gs_lcrp=EgZjaHJvbWUqEAgAEAAYkQIYsQMYgAQYigUyEAgAEAAYkQIYsQMYgAQYigUyDwgBEAAYChiRAhiABBiKBTINCAIQABiRAhiABBiKBTINCAMQABiRAhiABBiKBTIGCAQQRRg5MgoIBRAAGLEDGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEJOTAxNGowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-3 py-2 rounded-lg mt-3 flex items-center"
                  >
                    Check Now
                    <FaArrowRight className="ml-2 font-normal" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 text-[#3E424A] font-medium ">
          Based on a free-market ideology, bitcoin was invented in 2008 by
          Satoshi Nakamoto, an unknown person. Use of bitcoin as a currency
          began in 2009, with the release of its open-source implementation. In
          2021, El Salvador adopted it as legal tender.
        </div>
      </div>
    </div>
  );
}

export default About;
