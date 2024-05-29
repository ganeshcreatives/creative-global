import Link from "next/link";

export const bannerDiscoverPower = {
  title: "Discover The Power Of Digital At Your Physical Stores",
  description: `Designed to help retail businesses, Sekel Tech platform helps manage brands’ online presence, store orders, and consumers’ online to offline journey.
    `,
  renderImage: {
    src: "/digital-graph.svg",
    height: 300,
    width: 300,
    alt: "img",
  },
  renderMobileImage: {
    src: "/digital-graph-mobile.svg",
    height: 140,
    width: 300,
    alt: "img",
  },

};

export const information = [
  {
    title: "Email",
    subtitle: "info@sekel.tech",
    description: (
      <>
        <Link href={"mailto:info@sekel.tech"}>info@sekel.tech</Link>
        <br />
        <Link href={"mailto:careers@sekel.tech"}>careers@sekel.tech</Link>
      </>
    ),
    titleIcon: {
      src: "/Mail.png",
      height: 53,
      width: 53,
      alt: "img",
    },
  },
  {
    title: "Address",
    description:
      "91 Springboard, Creaticity Mall, Yerawada, Pune, Maharashtra-411006",
    titleIcon: {
      src: "/Location-marker.png",
      height: 53,
      width: 53,
      alt: "img",
    },
  },
  {
    title: "Contact",
    description: (
      <>
        <Link href={"tel:+917942569371"}>+91-794-256-9371</Link>
      </>
    ),
    titleIcon: {
      src: "/Phone.png",
      height: 53,
      width: 53,
      alt: "img",
    },
  },
];

export const seamlessIntegration = {
  title: "Visit our office !",
  description:
    "Visit our office to meet us in person! See where ideas come to life, have real conversations, and be a part of our story.",
  leadText: (
    <>
      <span className="text-[20px] font-medium inline-block mb-2">
        Monday -Friday
      </span>
      <br />
      <span className="text-[20px] font-medium inline-block">
        09:30am - 06:30pm
      </span>
    </>
  ),
  image: {
    src: "/map.png",
    height: 900,
    width: 900,
    alt: "integration",
  },
};

export const frequentlyAsked = {
  sectionData: {
    title: "Frequently Asked Questions",
    image: {
      src: "/faq.png",
      height: 500,
      width: 500,
      alt: "img",
    },
  },
  faqList: [
    {
      question: "What is hyperlocal marketing?",
      answer: "",
    },
    {
      question: "How does hyperlocal marketing benefit businesses?",
      answer: "",
    },
    {
      question: "What strategies can I use for hyperlocal marketing?",
      answer: "",
    },
    {
      question: "What strategies can I use for hyperlocal marketing?",
      answer:
        "Track metrics like foot traffic, local website visits, and social media engagement specific to your targeted area to gauge the effectiveness of your hyperlocal marketing efforts.",
    },
    {
      question: "How can I measure the success of my hyperlocal campaigns?",
      answer: "",
    },
  ],
};
