import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as MapPin, l as Mail, o as Phone } from "../_libs/lucide-react.mjs";
import { l as company, r as PageBanner } from "./router-mtmLmeU9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BYigFO_w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactForm() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const first = String(data.get("firstName") ?? "").trim();
		const last = String(data.get("lastName") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const phone = String(data.get("phone") ?? "").trim();
		const subject = String(data.get("subject") ?? "").trim();
		if (!first || !last || !email || !phone || !subject) {
			setError("Please complete all required fields.");
			return;
		}
		setError("");
		setStatus("sent");
		e.currentTarget.reset();
	}
	if (status === "sent") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-primary bg-primary-soft p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl font-bold text-ink",
				children: "Thank you"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "Your message has been received. A member of the Jettyland Investments team will get back to you shortly."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-6 bg-primary px-5 py-2.5 font-display text-sm font-semibold text-paper hover:bg-primary-dark",
				onClick: () => setStatus("idle"),
				children: "Send another message"
			})
		]
	});
	const field = "w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-4 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: field,
				name: "firstName",
				placeholder: "First Name*",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: field,
				name: "lastName",
				placeholder: "Last Name*",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: field,
				name: "email",
				type: "email",
				placeholder: "Email*",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: field,
				name: "phone",
				type: "tel",
				placeholder: "Phone*",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: `${field} sm:col-span-2`,
				name: "subject",
				placeholder: "Subject*",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: `${field} min-h-36 sm:col-span-2`,
				name: "comments",
				placeholder: "Comments",
				rows: 6
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sm:col-span-2 text-sm text-accent",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wide text-paper hover:bg-primary-dark",
					children: "Send Message"
				})
			})
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, { title: "Contact" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page grid gap-6 py-16 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-xl font-bold text-ink",
							children: "Mail for information"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${company.email}`,
							className: "mt-3 block text-sm hover:text-primary",
							children: company.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${company.emailAlt}`,
							className: "mt-1 block text-sm hover:text-primary",
							children: company.emailAlt
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-xl font-bold text-ink",
							children: "Office Phone Number"
						}),
						company.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${p.href}`,
							className: "mt-1 block text-sm hover:text-primary",
							children: p.display
						}, p.href))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-xl font-bold text-ink",
							children: "Our Location"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm",
							children: company.address
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-mist py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-start gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-bold text-ink",
					children: "We Love To Hear From You"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Please call or email us, we will be happy to assist you."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})]
			})
		})
	] });
}
//#endregion
export { ContactPage as component };
