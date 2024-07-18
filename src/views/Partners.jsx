import { motion } from "framer-motion";

const Partners = () => {
  const press = [
    {
      title: "ByBit",
      img: "Bybit",
      link: "https://www.bybit.com/en/trade/spot-m/BRETT/USDT",
    },
    {
      title: "KuCoin",
      img: "kucoin",
      link: "https://www.kucoin.com/trade/BRETT-USDT",
    },
    {
      title: "Phemex",
      img: "phemex",
      link: "https://phemex.com/trade/BRETTUSDT",
    },
    {
      title: "Gate",
      img: "gate",
      link: "https://www.gate.io/trade/BRETT_USDT",
    },
  
    {
      title: "BingX",
      img: "bing",
      link: "https://bingx.com/en-gb/spot/BRETTUSDT/",
    },
    
    {
      title: "Bitget",
      img: "bitg",
      link: "https://www.bitget.com/spot/BRETTUSDT",
    },
    
    
    {
      title: "Bitmart",
      img: "bitm",
      link: "https://www.bitmart.com/trade/en-US?symbol=BRETT_USDT",
    },
    {
      title: "XT",
      img: "xt",
      link: "https://www.xt.com/en/trade/brett_usdt",
    },
    {
      title: "Bitunix",
      img: "bitu",
      link: "https://www.bitunix.com/spot-trade/BRETTUSDT",
    },
    {
      title: "DigifinEx",
      img: "Digifin",
      link: "https://www.digifinex.com/en-ww/trade/kline/USDT/BRETT?type=App",
    },
    {
      title: "AscendEX",
     
      img: "asc",
      link: "https://ascendex.com/en/cashtrade-spottrading/usdt/brett",
    },
    
    
    
    
    {
      title: "CoinEX",
      img: "coine",
      link: "https://www.coinex.com/en/exchange/BRETT-USDT",
    },
    
    {
      title: "POLONIEX",
      img: "plnx",
      link: "https://poloniex.com/trade/BRETT_USDT?type=spot",
    },
    {
      title: "BITRUE",
      img: "bt",
      link: "https://www.bitrue.com/trade/brett_usdt",
    },
    {
      title: "HOTCOIN GLOBAL",
      img: "hg",
      link: "https://www.hotcoin.com/trade/brett_usdt",
    },
    {
      title: "BITKAN",
      img: "btkan",
      link: "https://bitkan.com/trade/BRETT-USDT",
    },
    
    {
      title: "LBANK",
      img: "lbank",
      link: "https://www.lbank.com/trade/brett_usdt",
    },
    {
      title: "OrangeX",
      img: "OrangeX",
      link: "https://www.orangex.com/spot/BRETT-USDT-SPOT",
    },
    {
      title: "CoinW",
      img: "CoinW",
      link: "https://www.coinw.com/frontweb/en_US/spot?symbol=1737",
    },
    {
      title: "Biconomy",
      img: "Biconomy",
      link: "https://www.biconomy.com/exchange/BRETT_USDT",
    },
    {
      title: "Tapbit",
      img: "Tapbit",
      link: "https://www.tapbit.com/spot/exchange/BRETT_USDT",
    },
    
    {
      title: "CoinsPH",
      img: "coinsph",
      link: "https://x.com/coinsph/status/1796093144804569219",
    },
    {
      title: "HiBT",
      img: "HiBT",
      link: "https://hibt.com/trade?symbol=BRETT_USDT",
    },
    {
      title: "WEEX",
      img: "WEEX",
      link: "https://trade.weex.com/trade/BRETT_USDT",
    },
    {
      title: "UPhold",
      img: "UPhold",
      link: "https://uphold.com/prices/crypto/brett",
    },
    {
      title: "CoinDCX",
      img: "CoinDCX",
      link: "https://coindcx.com/trade/BRETTUSDT",
    },
    {
      title: 'Cryptology',
      img: 'Cryptology',
      link: 'https://cryptology.com/trading/BRETT_USDT',
    },
    {
      title: 'Ourbit',
      img: 'ourbit',
      link: 'https://www.ourbit.com/exchange/BRETT_USDT',
    },
    {
      title: 'Coin One',
      img: 'Coinone',
      link: 'https://coinone.co.kr/exchange/trade/brett/krw',
    },
    {
      title: 'DeepCoin',
      img: 'DeepCoin',
      link: 'https://coinone.co.kr/exchange/trade/brett/krw',
    },
  ];


  const trading = [
    {
      title: "ByBit",
      img: "bybit",
      link: "https://www.bybit.com/trade/usdt/BRETTUSDT",
    },
  {
      title: "Kraken",
      img: "Kraken",
      link: "https://pro.kraken.com/app/trade/futures-brett-usd-perp",
    },
    {
      title: "KuCoin",
      img: "kucoin",
      link: "https://www.kucoin.com/trade/futures/BRETTUSDTM",
    },
    {
      title: "BitGet",
      img: "Bitget",
      link: "https://www.bitget.com/futures/usdt/BRETTUSDT",
    },
    {
      title: "MEXC",
      img: "mexc",
      link: "https://futures.mexc.com/exchange/BRETT_USDT",
    },
    {
      title: "Blofin",
      img: "Blofin",
      link: "https://blofin.com/futures/BRETT-USDT",
    },
    {
      title: "GateIO",
      img: "Gate",
      link: "https://www.gate.io/futures/USDT/BRETT_USDT",
    },
    {
      title: "Zoomex",
      img: "Zoomex",
      link: "https://www.zoomex.com/trade/usdt/BRETTUSDT",
    },
    {
      title: "LBank",
      img: "lbank",
      link: "https://www.lbank.com/futures/brettusdt",
    },
    {
      title: "Phemex",
      img: "phemex",
      link: "https://phemex.com/trade/BRETTUSDT",
    },
    {
      title: "KCEX",
      img: "KCEX",
      link: "https://futures.kcex.com/exchange/BRETT_USDT?type=linear_swap",
    },
    {
      title: "OX Fun",
      img: "OX",
      link: "https://ox.fun/en/markets/BRETT-USD-SWAP-LIN",
    },
    {
      title: "Woofi",
      img: "Woofi",
      link: "https://dex.woo.org/en/trade/BRETT_PERP",
    },
  ];


  return (
    <section className="w-full h-auto p-10 relative z-20 bg-lyllw/40">

      <div className="max-w-7xl mx-auto bg-lyllw/70 backdrop-blur-md p-5 xl:p-20 rounded-xl">
        <div className='flex flex-col justify-center items-center text-6xl lg:text-9xl leading-[3rem] lg:leading-[5rem] mb-10'>
          <p>BUY IT ON</p>
        </div>
        <div className="flex flex-wrap justify-center">
  {press.map((item) => (
    <div key={item.title} className="w-1/3 lg:w-1/5 xl:w-1/7 p-2 md:p-2">
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <img
          src={`/DEX/${item.img}.png`}
          alt={item.title}
          className="w-full mx-auto duration-300 transition-all ease-in-out"
        />
      </a>
    </div>
  ))}
</div>


        
        <div className="bg-white h-1 w-full max-w-xs mx-auto rounded-full mb-10 mt-5" />


        <div className='flex flex-col justify-center items-center text-6xl lg:text-9xl leading-[3rem] lg:leading-[5rem] mb-10'>
          <p className="mt-5 text-center">FUTURES TRADING</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {trading.map((item) => (
            <div key={item.title} className="w-1/3 lg:w-1/5 xl:w-1/7 p-2 md:p-2">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={`/futures/${item.img}.png`}
                  alt={item.title}
                  className="w-full mx-auto duration-300 transition-all ease-in-out"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;