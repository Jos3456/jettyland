import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as PageBanner } from "./router-mtmLmeU9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/career-opportunities-BtGSwtv1.js
var import_jsx_runtime = require_jsx_runtime();
function CareersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, { title: "Career Opportunities" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page max-w-3xl py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-bold text-ink",
				children: "Join the Jettyland team"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5",
				children: "We welcome professionals with real estate experience needed across sales, marketing, operational, and managerial roles."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4",
				children: [
					"Applicants should only contact us through",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:jettylandinvestmentslimited@gmail.com",
						className: "font-semibold text-primary",
						children: "jettylandinvestmentslimited@gmail.com"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: [
					"Sales",
					"Marketing",
					"Operations",
					"Managerial"
				].map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border border-line px-5 py-4 font-display font-semibold text-ink",
					children: role
				}, role))
			})
		]
	})] });
}
//#endregion
export { CareersPage as component };
