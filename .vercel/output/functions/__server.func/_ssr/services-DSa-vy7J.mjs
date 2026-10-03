import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as services, r as PageBanner } from "./router-mtmLmeU9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DSa-vy7J.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, { title: "Our Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm font-semibold tracking-[0.2em] text-primary uppercase",
				children: "Jettyland Investments"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-4xl font-bold text-ink",
				children: "What Services we Provide for Our Customers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-3xl",
				children: "Our agency is only as strong as our people. From letting and rent collection to management, sales, consultancy and valuation, we run every brief with the same professional standard for landlords, tenants, investors, and buyers in Mombasa."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line bg-paper p-6 shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image,
							alt: "",
							className: "mb-5 h-44 w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold text-ink",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm",
							children: s.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: s.href,
							className: "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary",
							children: ["Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}, s.href))
			})
		]
	})] });
}
//#endregion
export { ServicesPage as component };
