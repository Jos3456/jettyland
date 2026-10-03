import { createFileRoute } from "@tanstack/react-router";
import { ServiceView } from "@/components/ServiceView";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/consultancy-valuation")({
  head: () => ({ meta: [{ title: "Consultancy & Valuation – Jettyland Investments" }] }),
  component: Page,
});

function Page() {
  return <ServiceView service={getService("consultancy-valuation")!} />;
}
