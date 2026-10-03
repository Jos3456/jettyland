import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as House, r as Users, u as Landmark, y as Building2 } from "../_libs/lucide-react.mjs";
import { r as PageBanner } from "./router-mtmLmeU9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-clients-oe0M0qFE.js
var import_jsx_runtime = require_jsx_runtime();
var audiences = [
	{
		title: "Landlords & Property Owners",
		icon: House,
		text: "From single apartments in Nyali to multi-unit portfolios across Mombasa, we let, collect rent, and manage properties so owners can enjoy reliable income without the day-to-day strain."
	},
	{
		title: "Tenants & Families",
		icon: Users,
		text: "We match qualified tenants with well-maintained homes and professional lease management — so moving in is smooth, fair, and clearly documented."
	},
	{
		title: "Investors",
		icon: Landmark,
		text: "Buyers and investors use our valuations, market research, and sales advisory to price correctly, enter the right neighbourhoods, and protect long-term returns."
	},
	{
		title: "Corporate Occupiers",
		icon: Building2,
		text: "Companies relocating staff or securing offices in Mombasa rely on us for discreet searches, negotiations, and ongoing property care."
	}
];
function ClientsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, { title: "Our Clients" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl",
				children: "Jettyland Investments Limited works with property owners, tenants, investors, and organisations who want a professional, Mombasa-based partner. Every brief is handled with the same standard: clear communication, careful screening, and outcomes that protect the asset."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2",
				children: audiences.map((item) => {
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border border-line p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-12 items-center justify-center rounded-full bg-primary text-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-xl font-bold text-ink",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm",
								children: item.text
							})
						]
					}, item.title);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "mt-10 inline-flex bg-primary px-6 py-3 font-display text-sm font-semibold text-paper hover:bg-primary-dark",
				children: "Become a Client"
			})
		]
	})] });
}
//#endregion
export { ClientsPage as component };
