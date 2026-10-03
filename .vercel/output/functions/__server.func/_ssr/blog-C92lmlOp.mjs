import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as posts, r as PageBanner } from "./router-mtmLmeU9.mjs";
import { t as BlogSidebar } from "./BlogSidebar-My-T9I-d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-C92lmlOp.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, { title: "Blog" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page grid gap-12 py-16 lg:grid-cols-[1fr_20rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-10",
			children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden border border-line bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/blog/$slug",
					params: { slug: post.slug },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.image,
						alt: "",
						className: "h-72 w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"by ",
								post.author,
								" · ",
								post.date
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl font-bold text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog/$slug",
								params: { slug: post.slug },
								className: "hover:text-primary",
								children: post.title
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: [post.excerpt, "…"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: post.slug },
							className: "mt-5 inline-flex items-center gap-1 font-display text-sm font-bold text-primary",
							children: ["READ MORE", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})]
			}, post.slug))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogSidebar, {})]
	})] });
}
//#endregion
export { BlogIndex as component };
