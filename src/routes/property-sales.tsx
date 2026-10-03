import { createFileRoute } from "@tanstack/react-router";
import { ServiceView } from "@/components/ServiceView";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/property-sales")({
  head: () => ({ meta: [{ title: "Property Sales – Jettyland Investments" }] }),
  component: Page,
});

function Page() {
  return <ServiceView service={getService("property-sales")!} />;
}
