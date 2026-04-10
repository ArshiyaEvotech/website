import React from 'react';
import { ArrowRight, BadgeDollarSign, ClipboardList, FilePenLine, Flame } from 'lucide-react';
import '../assets/App.css';
import hubflowImg from '../assets/hubflow.png';

const featureList = [
  {
    title: 'User -Friendly Interface',
    text: 'Easy to use, even for beginners',
  },
  {
    title: 'Secure & Reliable',
    text: 'Your data safe with us',
  },
  {
    title: '24/7 Support',
    text: "We're here to help, anytime",
  },
  {
    title: 'Sealable for Teams',
    text: 'Designed to scale with your needs',
  },
];

const cards = [
  {
    title: 'Create',
    text: 'There are many vriations of passages f Lorem Ipsum but the majority have',
    icon: FilePenLine,
  },
  {
    title: 'Customize',
    text: 'There are many vriations of passages f Lorem Ipsum but the majority have',
    icon: ClipboardList,
  },
  {
    title: 'Say On Top',
    text: 'There are many vriations of passages f Lorem Ipsum but the majority have',
    icon: BadgeDollarSign,
  },
];

const Home2 = () => {
  const innerFramePath =
    "M 66 72 L 874 90 Q 932 92 956 130 L 988 566 Q 994 614 962 630 Q 950 634 926 634 H 67 Z";
  const outerFramePath =
    "M 70 65 L 878 94 Q 936 96 962 138 L 994 570 Q 1002 622 970 638 Q 958 642 932 642 H 70";

  return (
    <main className="home2-hero">
      <div className="home2-bg-circle" aria-hidden="true" />

      <section className="home2-container">
        <div className="home2-left-col">
          <div className="home2-frame-wrap">
            <svg
              className="home2-device-svg"
              viewBox="0 0 1080 670"
              aria-label="Dashboard"
              role="img"
            >
              <defs>
                <clipPath id="home2-device-clip">
                  <path d={innerFramePath} />
                </clipPath>
              </defs>

              <image
                href={hubflowImg}
                x="58"
                y="46"
                width="990"
                height="620"
                preserveAspectRatio="xMinYMid slice"
                clipPath="url(#home2-device-clip)"
              />
              <path
                d={outerFramePath}
                fill="none"
                stroke="#2b2f36"
                strokeWidth="14"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              
            </svg>
          </div>
        </div>

        <div className="home2-right-col">
          <span className="home2-badge">
            Our Features
            <Flame size={14} strokeWidth={2.2} />
          </span>

          <h1 className="home2-heading">
            We Provide The Best
            <br />
            Quality
          </h1>

          <p className="home2-description">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly
          </p>

          <ul className="home2-checklist">
            {featureList.map((item) => (
              <li key={item.title}>
                <span className="home2-bullet" />
                <span className="home2-check-copy">
                  <strong>{item.title}</strong> : {item.text}
                </span>
              </li>
            ))}
          </ul>

          <button className="home2-btn">
            Learn More
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </div>
      </section>

      <section className="home2-cards-section">
        {cards.map(({ title, text, icon: Icon }) => (
          <article className="home2-card" key={title}>
            <div className="home2-card-icon">
              <Icon size={34} strokeWidth={1.7} />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Home2;
