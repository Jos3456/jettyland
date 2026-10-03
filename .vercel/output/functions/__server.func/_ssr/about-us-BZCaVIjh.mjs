import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as PageBanner, u as coreValues } from "./router-mtmLmeU9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-us-BZCaVIjh.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, { title: "About Us" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page grid items-start gap-12 py-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-semibold tracking-[0.2em] text-primary uppercase",
					children: "About Jettyland Investments"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-bold text-ink",
					children: "Your Trusted Partner in Property Solutions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6",
					children: "Jettyland Investments Limited is a full-service real estate company specializing in House and Apartment Letting, Rent Collection, Property Management, Consultancy and Valuation, and Property Sales."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4",
					children: "Based in Mombasa, we have built a reputation for delivering reliable, client-focused services tailored to meet the unique needs of every property owner and investor we work with."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-l-4 border-primary bg-fog p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold text-ink",
							children: "Mission"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: "To provide exceptional real estate services by prioritizing integrity, innovative solutions and customer satisfaction, ensuring that every client navigates their property journeys with ease and confidence."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-l-4 border-primary bg-fog p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold text-ink",
							children: "Vision"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: "To be the most trusted and innovative real estate company, known for transforming the property experience by creating exceptional value and positive experiences for every community we serve."
						})]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/about.jpg",
					alt: "Jettyland Investments",
					className: "w-full object-cover"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-mist py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold text-ink",
						children: "Company Core Values"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 md:grid-cols-3",
						children: coreValues.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-paper p-6 shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold text-primary",
								children: v.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm",
								children: v.text
							})]
						}, v.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-10 inline-flex bg-primary px-6 py-3 font-display text-sm font-semibold text-paper hover:bg-primary-dark",
						children: "Work With Us"
					})
				]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
