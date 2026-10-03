export type ServiceBlock = {
  title: string;
  text: string;
};

export type Service = {
  slug: string;
  href: string;
  title: string;
  short: string;
  icon: "key" | "wallet" | "building" | "home" | "scale";
  image: string;
  eyebrow: string;
  headline: string;
  intro: string[];
  includesTitle: string;
  includes: ServiceBlock[];
  whyTitle: string;
  why: ServiceBlock[];
  closingTitle: string;
  closing: string[];
  ctaTitle?: string;
  ctaText?: string;
};

export const services: Service[] = [
  {
    slug: "letting-services",
    href: "/letting-services",
    title: "Letting Services",
    short:
      "We connect property owners with qualified tenants, ensuring fast occupancy and minimal vacancy periods.",
    icon: "key",
    image: "/images/team-1.jpg",
    eyebrow: "Letting Services",
    headline: "Finding the Right Tenants Made Easy",
    intro: [
      "We understand that finding the right tenants is the foundation of successful property management. Whether you own a single apartment or a portfolio of houses, our expert letting services are designed to connect your property with qualified, reliable tenants — quickly and efficiently.",
    ],
    includesTitle: "Our Comprehensive Letting Service Includes:",
    includes: [
      {
        title: "Property Marketing",
        text: "We showcase your property through professional listings, targeted advertising, and our wide network of prospective tenants to attract maximum interest.",
      },
      {
        title: "Tenant Screening",
        text: "We conduct thorough background checks, employment verifications, credit assessments, and reference checks to ensure only responsible tenants occupy your property.",
      },
      {
        title: "Viewings and Negotiations",
        text: "We handle all viewings, answer tenant queries, and negotiate lease terms to secure the best possible agreement for you.",
      },
      {
        title: "Lease Preparation",
        text: "Our team prepares professional tenancy agreements that protect your rights and clearly outline tenant obligations, giving you full peace of mind.",
      },
      {
        title: "Move-In Coordination",
        text: "From inventory checks to key handovers, we ensure the move-in process is smooth and stress-free for both landlord and tenant.",
      },
    ],
    whyTitle: "Why Choose Our Letting Services?",
    why: [
      {
        title: "Quick Occupancy",
        text: "We minimize vacancy periods by finding the right tenant, fast.",
      },
      {
        title: "Reliable Tenants",
        text: "Our screening process reduces the risk of late payments, property damage, and tenant turnover.",
      },
      {
        title: "Professional Support",
        text: "Our experienced team manages the entire letting process, saving you time, money, and stress.",
      },
      {
        title: "Tailored Solutions",
        text: "Whether you prefer a hands-on approach or complete management, we customize our services to suit your needs.",
      },
    ],
    closingTitle: "Landlords Trust Us — Tenants Recommend Us",
    closing: [
      "With a strong focus on professionalism, transparency, and efficiency, Jettyland Investments Limited has built a reputation as a trusted partner for landlords and tenants alike. We are committed to ensuring that every property we let is cared for, and that every tenancy is a positive experience for everyone involved.",
    ],
  },
  {
    slug: "rent-collection",
    href: "/rent-collection",
    title: "Rent Collection",
    short:
      "We take the hassle out of rent collection by providing timely, secure, and accountable services.",
    icon: "wallet",
    image: "/images/team-2.jpg",
    eyebrow: "Rent Collection",
    headline: "Stress-Free, Reliable Rent Collection Services",
    intro: [
      "We understand that timely rent collection is essential to the success of your property investment. Our Rent Collection services are designed to take the pressure off landlords, ensuring steady cash flow and professional handling of all tenant payments.",
    ],
    includesTitle: "What Our Rent Collection Service Includes:",
    includes: [
      {
        title: "Invoicing and Payment Reminders",
        text: "We issue clear, timely rent invoices and follow up with polite but firm reminders to tenants before rent is due.",
      },
      {
        title: "Secure Payment Processing",
        text: "All rent payments are collected through secure, traceable channels and deposited directly into your account without unnecessary delays.",
      },
      {
        title: "Late Payment Handling",
        text: "In the event of late payments, we act swiftly and professionally to resolve issues, including issuing formal notices and making necessary arrangements to protect your income.",
      },
      {
        title: "Detailed Reporting",
        text: "You’ll receive clear, monthly statements showing all rent collected, outstanding amounts, and any applicable fees, keeping your financial records accurate and up to date.",
      },
      {
        title: "Legal Compliance",
        text: "We ensure that the entire rent collection process adheres to all current rental laws and regulations, safeguarding your rights as a landlord.",
      },
    ],
    whyTitle: "Why Entrust Us With Rent Collection?",
    why: [
      {
        title: "Consistent Cash Flow",
        text: "We prioritize on-time payments so you can manage your finances with confidence.",
      },
      {
        title: "Professional Communication",
        text: "We maintain positive relationships with tenants while firmly upholding payment obligations.",
      },
      {
        title: "Reduced Stress",
        text: "Avoid uncomfortable conversations with tenants — we handle all rent matters on your behalf.",
      },
      {
        title: "Accountability and Transparency",
        text: "Our open reporting system ensures you always know where your money is and how it’s being managed.",
      },
    ],
    closingTitle: "Protect Your Investment with Professional Rent Collection",
    closing: [
      "Managing your rent collection, you no longer need to worry about chasing payments or managing difficult conversations. Our service gives you the freedom to focus on growing your property portfolio — while we ensure your income stays on track.",
    ],
  },
  {
    slug: "property-management",
    href: "/property-management",
    title: "Property Management",
    short:
      "From maintenance coordination and regular inspections to tenant relations.",
    icon: "building",
    image: "/images/team-3.jpg",
    eyebrow: "Property Management",
    headline: "Your Property, Our Priority",
    intro: [
      "We believe that effective property management is the key to maximizing your investment’s value and ensuring long-term success. Whether you own a single apartment, a multi-unit complex, or multiple properties, our comprehensive Property Management services are designed to give you total peace of mind.",
    ],
    includesTitle: "Our Full-Service Property Management Includes",
    includes: [
      {
        title: "Tenant Relations",
        text: "We handle all tenant communications professionally — from responding to queries and managing disputes to coordinating renewals and ensuring tenant satisfaction.",
      },
      {
        title: "Maintenance and Repairs",
        text: "We coordinate regular property inspections, preventative maintenance, and emergency repairs using trusted, cost-effective contractors to keep your property in excellent condition.",
      },
      {
        title: "Rent Collection and Financial Management",
        text: "We ensure timely rent collection, manage arrears, and provide detailed financial reports, helping you track your property’s performance easily.",
      },
      {
        title: "Legal Compliance",
        text: "From lease agreements to handling evictions and regulatory requirements, we make sure your property operations meet all legal standards.",
      },
      {
        title: "Marketing and Letting",
        text: "When a property becomes vacant, we act quickly to market it, screen new tenants, and minimize downtime — keeping your income flowing steadily.",
      },
    ],
    whyTitle: "Why Choose us for Property Management?",
    why: [
      {
        title: "Experienced Professionals",
        text: "Our team brings expertise, dedication, and a personal touch to every property we manage.",
      },
      {
        title: "Maximized Returns",
        text: "We focus on increasing occupancy rates, reducing maintenance costs, and preserving property value to boost your overall returns.",
      },
      {
        title: "Transparent Communication",
        text: "With regular updates, detailed reporting, and a clear point of contact, you’re always in control of your investment.",
      },
      {
        title: "Customized Solutions",
        text: "We understand that every property and owner is unique — that’s why we tailor our services to meet your specific goals and needs.",
      },
    ],
    closingTitle: "Enjoy Stress-Free Ownership",
    closing: [
      "Owning rental property doesn’t have to be overwhelming. Let us take care of the day-to-day management while you enjoy the benefits of passive income and long-term asset growth.",
    ],
    ctaTitle: "Ready to Partner With a Trusted Property Manager?",
    ctaText:
      "Get in touch with us today to discuss how our Property Management services can help you protect, grow, and maximize your property investments.",
  },
  {
    slug: "property-sales",
    href: "/property-sales",
    title: "Property Sales",
    short: "Our experienced sales team provides personalized marketing strategies.",
    icon: "home",
    image: "/images/why-bg.jpg",
    eyebrow: "Property Sales",
    headline: "Helping You Sell with Confidence and Success",
    intro: [
      "We specialize in helping property owners achieve successful, stress-free sales. Whether you are selling a home, an apartment, land, or a commercial property, our experienced team is dedicated to securing the best possible price in the shortest time frame.",
      "We understand that selling a property is a major decision — and we’re here to guide you every step of the way.",
    ],
    includesTitle: "Our Property Sales Services Include",
    includes: [
      {
        title: "Accurate Property Valuation",
        text: "We provide honest, market-driven valuations to ensure your property is competitively priced to attract the right buyers.",
      },
      {
        title: "Professional Marketing",
        text: "Your property is showcased across top real estate platforms, social media, and our client network with high-quality photos, engaging descriptions, and strategic advertising to maximize visibility.",
      },
      {
        title: "Buyer Screening and Negotiations",
        text: "We handle all inquiries, qualify potential buyers, and negotiate on your behalf to secure the best possible offer — ensuring a smooth and rewarding sale.",
      },
      {
        title: "Documentation and Legal Support",
        text: "We assist with all paperwork and liaise with legal experts to ensure that the sale process is compliant, efficient, and hassle-free.",
      },
      {
        title: "Personalized Selling Strategies",
        text: "Every property is unique. We tailor our sales approach based on your timeline, goals, and the current market to achieve optimal results.",
      },
    ],
    whyTitle: "Why Sell With Us?",
    why: [
      {
        title: "Expert Market Knowledge",
        text: "We understand local property markets deeply and use that knowledge to your advantage.",
      },
      {
        title: "Proven Track Record",
        text: "Our satisfied clients are a testament to our ability to deliver results — quickly and profitably.",
      },
      {
        title: "Transparent Communication",
        text: "We keep you informed at every stage of the process, ensuring clarity and confidence in every decision.",
      },
      {
        title: "Committed to Your Success",
        text: "Your goals are our goals. We work tirelessly to ensure you achieve the outcome you deserve.",
      },
    ],
    closingTitle: "Turn Your Property Into Opportunity",
    closing: [
      "Selling property doesn’t have to be complicated or overwhelming. At Jettyland Investments Limited, we make it easy — and rewarding. Trust us to manage the sale of your property with professionalism, integrity, and unmatched dedication.",
    ],
    ctaTitle: "Ready to Sell Your Property?",
    ctaText:
      "Contact us today to schedule a consultation and discover how we can help you sell your property quickly and profitably.",
  },
  {
    slug: "consultancy-valuation",
    href: "/consultancy-valuation",
    title: "Consultancy & Valuation",
    short:
      "We offer strategic advice, property valuation, and market insights tailored to your goals.",
    icon: "scale",
    image: "/images/team-3.jpg",
    eyebrow: "Consultancy & Valuation",
    headline: "Expert Advice. Accurate Valuations.",
    intro: [
      "We offer professional consultancy and valuation services designed to help you make informed, confident real estate decisions. Whether you’re buying, selling, investing, or developing property, our experienced team provides the insights and accurate assessments you need to maximize your success.",
    ],
    includesTitle: "Our Consultancy & Valuation Services Include",
    includes: [
      {
        title: "Property Valuation",
        text: "We provide accurate, market-driven property valuations for sales, purchases, refinancing, insurance, taxation, and legal purposes — helping you understand the true worth of your property.",
      },
      {
        title: "Investment Advice",
        text: "Thinking of investing in real estate? We offer strategic advice on property selection, market trends, risk management, and investment potential, guiding you toward high-return opportunities.",
      },
      {
        title: "Development Feasibility Studies",
        text: "Planning a construction or development project? We assess market demand, project costs, and profitability to help you determine the viability of your venture.",
      },
      {
        title: "Market Research and Analysis",
        text: "We conduct detailed market surveys and data analysis to give you a clear view of property trends, rental rates, sale prices, and growth areas.",
      },
      {
        title: "Tailored Property Solutions",
        text: "Every client’s goals are unique. We work closely with you to deliver customized advice and strategies aligned with your financial and real estate ambitions.",
      },
    ],
    whyTitle: "Why Trust us for Consultancy & Valuation?",
    why: [
      {
        title: "Qualified Experts",
        text: "Our consultants and valuers bring years of hands-on experience and professional certification to every assignment.",
      },
      {
        title: "Unbiased, Independent Advice",
        text: "We act solely in your best interests, providing honest, objective assessments you can rely on.",
      },
      {
        title: "Accurate, Up-to-Date Valuations",
        text: "Using the latest market data, industry standards, and valuation techniques, we ensure that our reports reflect current property realities.",
      },
      {
        title: "Strategic Insights",
        text: "Beyond numbers, we offer valuable advice to help you seize opportunities, minimize risks, and build lasting value from your real estate investments.",
      },
    ],
    closingTitle: "The Right Information Makes All the Difference",
    closing: [
      "In real estate, every decision carries weight. With Jettyland Investments by your side, you’ll have the expert support you need to make choices that are smart, profitable, and future-ready.",
    ],
    ctaTitle: "Need Professional Consultancy or a Property Valuation?",
    ctaText:
      "Reach out to us today for a confidential consultation and find out how we can help you navigate your next real estate move with confidence.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
