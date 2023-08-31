/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 pt-[50px] text-[1rem] text-slate-300">
      <div className="w-full mb-[60px] px-4 sm:px-[30px] lg:px-[80px] flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
        <ul className="w-[fit-content] mb-10 md:mb-0">
          <li className="mb-4">
            <div className="flex gap-2 items-center">
              <img
                alt=""
                src="/images/icons8-trading-50.png"
                className="w-7 h-7"
              />
              <h1 className="text-[.95rem]">Lonacare</h1>
            </div>
          </li>
          {/* <li className="w-[fit-content] mb-2 cursor-pointer hover:text-orange-500">
              About Us
            </li>
            <li className="w-[fit-content] mb-2 cursor-pointer hover:text-orange-500">
              Contact Us
            </li> */}
        </ul>

        <div className="w-full sm:w-[300px] lg:w-[500px] border border-white/10 rounded-lg p-3 text-[.75rem] text-white/50">
          The Financial Products offered by the company include Contracts for
          Difference ('CFDs') and other complex financial products. Trading CFDs
          carries a high level of risk since leverage can work both to your
          advantage and disadvantage. As a result, CFDs may not be suitable for
          all investors because it is possible to lose all of your invested
          capital. You should never invest money that you cannot afford to lose.
          Before trading in the complex financial products offered, please
          ensure to understand the risks involved.
        </div>
      </div>
      <div className="w-full h-[80px] flex justify-center items-center text-[0.75rem] border-t border-slate-700 text-orange-500  ">
        Copyright © 2023 ForeignExchangeMarketFunds
      </div>
    </footer>
  );
};

export default Footer;
