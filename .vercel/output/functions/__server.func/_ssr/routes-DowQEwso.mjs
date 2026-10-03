import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, X as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Scale, b as ArrowRight, d as KeyRound, f as House, g as ChevronLeft, h as ChevronRight, n as Wallet, p as CircleCheck, y as Building2 } from "../_libs/lucide-react.mjs";
import { a as services, f as whyChoose, o as cn, s as latestPosts } from "./router-mtmLmeU9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DowQEwso.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var slides = [
	{
		src: "/images/hero-3.png",
		alt: "Aerial view of Nyali and the Mombasa coastline"
	},
	{
		src: "/images/hero-1.jpg",
		alt: "Beachfront residence along the Kenyan coast"
	},
	{
		src: "/images/hero-2.jpg",
		alt: "Palm-lined coastal property in Mombasa"
	}
];
function HeroSlider() {
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setIndex((i) => (i + 1) % slides.length);
		}, 6e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[70vh] min-h-[28rem] overflow-hidden bg-banner md:h-[78vh]",
		children: [
			slides.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute inset-0 transition-opacity duration-700", i === index ? "opacity-100" : "opacity-0"),
				"aria-hidden": i !== index,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slide.src,
					alt: slide.alt,
					className: cn("size-full object-cover", i === index && "hero-ken")
				})
			}, slide.src)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-ink/40 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute top-1/2 left-4 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-paper/85 text-ink transition-colors hover:bg-primary hover:text-paper md:inline-flex",
				onClick: () => setIndex((i) => (i - 1 + slides.length) % slides.length),
				"aria-label": "Previous slide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute top-1/2 right-4 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-paper/85 text-ink transition-colors hover:bg-primary hover:text-paper md:inline-flex",
				onClick: () => setIndex((i) => (i + 1) % slides.length),
				"aria-label": "Next slide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2",
				children: slides.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Go to slide ${i + 1}`,
					className: cn("h-2 rounded-full transition-all", i === index ? "w-8 bg-primary" : "w-2 bg-paper/70"),
					onClick: () => setIndex(i)
				}, slide.src))
			})
		]
	});
}
var icons = {
	key: KeyRound,
	wallet: Wallet,
	building: Building2,
	home: House,
	scale: Scale
};
function ServicesIntro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-semibold tracking-[0.22em] text-primary uppercase",
					children: "What We Do"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-bold text-ink md:text-5xl",
					children: "Our Business Solution"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-3xl text-body",
					children: "Welcome to Jettyland Investments Limited, where we combine experience, professionalism, and a passion for real estate to deliver outstanding property services. Whether you are a landlord, tenant, investor, or buyer, we are committed to making your real estate journey simple, profitable, and stress-free."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5",
					children: services.map((service) => {
						const Icon = icons[service.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: service.href,
									className: "mx-auto flex size-24 items-center justify-center rounded-full bg-primary text-paper shadow-[var(--shadow-card)] transition-transform duration-200 group-hover:scale-105",
									"aria-label": service.title,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-10",
										strokeWidth: 1.6
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-lg font-bold text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: service.href,
										className: "hover:text-primary",
										children: service.title
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: service.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: service.href,
									className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2",
									children: ["Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						}, service.href);
					})
				})
			]
		})
	});
}
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-banner py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero-3.png",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/75" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative z-10 grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold tracking-[0.22em] text-primary uppercase",
						children: "Jettyland Investments Ltd."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl font-bold text-paper md:text-5xl",
						children: "Why Choose Us?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-6",
						children: whyChoose.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-6 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold text-paper",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-paper/80",
								children: item.text
							})] })]
						}, item.title))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/about.jpg",
						alt: "Jettyland Investments advisor",
						className: "relative z-10 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-3 -bottom-3 h-full w-full border-8 border-primary" })]
				})]
			})
		]
	});
}
function ConsultationCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary-soft py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-bold text-ink md:text-4xl",
				children: "Request a Schedule Consultation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "inline-flex items-center gap-3 bg-paper px-6 py-3 font-display text-sm font-bold tracking-widest text-ink shadow-[var(--shadow-card)] transition-colors hover:bg-accent hover:text-paper",
				children: ["REQUEST NOW", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex size-8 items-center justify-center rounded-full border border-accent text-accent",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
				})]
			})]
		})
	});
}
function ExperienceBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid items-center gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/why-bg.jpg",
					alt: "Professional collaboration",
					className: "h-[26rem] w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-7xl font-bold leading-none text-primary md:text-8xl",
					children: "25"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 font-display text-2xl font-bold text-ink md:text-3xl",
					children: "We’ve Year Of Experiences"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-body",
				children: "We bring more than 20 years’ senior experience forging collaborations across government private sector and international forums."
			})] })]
		})
	});
}
function LatestPosts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-mist py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-semibold tracking-[0.22em] text-primary uppercase",
					children: "Blog"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-bold text-ink",
					children: "Our Latest Posts"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-3xl text-body",
					children: "At Jettyland Investments, we believe that informed clients make smarter property decisions. Our blog is your go-to source for expert tips, market insights, property management advice, real estate trends, and everything you need to succeed in the property world."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-8 md:grid-cols-3",
					children: latestPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden bg-paper shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog/$slug",
							params: { slug: post.slug },
							className: "block overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: post.image,
								alt: "",
								className: "h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/blog/$slug",
										params: { slug: post.slug },
										className: "hover:text-primary",
										children: post.title
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: post.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/blog/$slug",
									params: { slug: post.slug },
									className: "mt-5 inline-flex items-center gap-1 text-sm font-bold tracking-wide text-primary",
									children: ["READ MORE", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						})]
					}, post.slug))
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlider, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesIntro, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationCta, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatestPosts, {})
	] });
}
//#endregion
export { Home as component };
