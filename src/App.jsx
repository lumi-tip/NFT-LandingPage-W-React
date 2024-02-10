import { useState } from 'react'
import './App.css'
import sneakers from './assets/sneakers.png'
import punkNFT from './assets/punkNFT.png'
import bgBlack from './assets/background-b.png'
import blackCode from './assets/blackCode.jpg'

function App() {

  return (
    <>
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <Footer/>
    </>
  )
}

const Header = () =>{
  return (
    <header>
      <h1>Insanely Expensive JPEGs</h1>
			<h3>(Also known as NFTs)</h3>
    </header>
  )
}

const FirstSection = () =>{
  return (
    <section>
			<h2>Meta-Pigeon Sneaker NFT $33,000</h2>
			<img className='hero-img' src={sneakers} alt="Orange and silver sneakers"/>
			<p id="section-tittle"><strong>At $33k, this NFT sneaker is super good value!</strong></p>
			<p id="section-description">If you've got lots of money and you're a bit daft, NFTs are a 
				great way to pay for something that doesn't have any intrinsic 
				value or even exist. Tech fashionistas are jumping on the NFT 
				bandwagon and spending eye-watering sums of money on crypto images. 
				Our advice: spend the weekend <a className='link' href="#">crafting an NFT</a> and by 
				this time next week, you'll be a millionaire.</p>
			<a className="btn-buy btn" href="#">Buy NFT</a>
			<a className='btn-info btn' href="#">More info</a>
		</section>
  )
}

const SecondSection = () =>{
  return (
    <section id="second-section">
      <h2>For the true Crypto-connoisseur</h2>
      <div className='img-div'>
        <img className='scndSec-imgs' src={punkNFT} alt="punk with blach hair and red and blue glasses"/>
        <img className='scndSec-imgs' src={blackCode} alt="Seven items from a game listed in white on a black background"/>
      </div>
			<p id="scnd-desc">Is $33k for sneakers too basic for you? No problem! This CryptoPunk 
				(left) is a steal at $6.6 million! Which makes Bag #748 (right) a 
				total bargain at $1.4 million. And by the way, that's not a VS 
				Code screenshot we included by mistake. The eight lines of white text 
				on a black background is the actual NFT we're selling.</p>
			<a className='btn btn-about' href="#">About Us</a>
			<a className='btn btn-contact' href="#">Contact</a>
			<p id="end-text">Still not convinced? To be honest, nor are we. That's why we're selling 
				them, not buying them.</p>
    </section>
  )
}

const Footer = () =>{
  return (
  <footer>
    <p>2022 FoolsGold.com</p>
  </footer>
  )
}

export default App
