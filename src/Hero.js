import React from "react";
import phone from './images/phone.svg'
import { useGlobalContext } from "./Context";


export default function Hero() {
  const { submenuClose } = useGlobalContext();

  return (
    <section className="hero" onMouseEnter={()=>submenuClose()}>
      <article className="hero-text-con">
        <h1 className="hero-heading">Payments infrastructure <br></br>for the internet</h1>
        <p className="hero-info">Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
        <button className="btn startup-btn">Start now</button>
      </article>
      <div className="hero-image-con">
        <img src={phone} alt="phone" className="hero-image"/>
      </div>
    </section>
  );
}
