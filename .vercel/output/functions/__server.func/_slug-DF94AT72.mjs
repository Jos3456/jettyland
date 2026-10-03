import { S as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route, r as PageBanner } from "./_ssr/router-mtmLmeU9.mjs";
import { t as BlogSidebar } from "./_ssr/BlogSidebar-My-T9I-d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DF94AT72.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPostPage() {
	const post = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		title: post.title,
		crumbs: [
			{
				label: "Blog",
				href: "/blog"
			},
			{ label: "Property" },
			{ label: post.title }
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page grid gap-12 py-16 lg:grid-cols-[1fr_20rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.image,
				alt: "",
				className: "mb-8 h-80 w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"by ",
					post.author,
					" · ",
					post.date,
					" · ",
					post.category
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-4",
				children: post.body.map((block, i) => {
					if (block.type === "h3") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "pt-4 font-display text-2xl font-bold text-ink",
						children: block.text
					}, i);
					if (block.type === "callout") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "border-l-4 border-primary bg-primary-soft px-4 py-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "text-ink",
								children: [block.label, ":"]
							}),
							" ",
							block.text
						]
					}, i);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: block.text }, i);
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogSidebar, {})]
	})] });
}
//#endregion
export { BlogPostPage as component };
