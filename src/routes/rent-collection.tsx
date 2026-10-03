import { createFileRoute } from "@tanstack/react-router";
import { ServiceView } from "@/components/ServiceView";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/rent-collection")({
  head: () => ({ meta: [{ title: "Rent Collection – Jettyland Investments" }] }),
  component: Page,
});

function Page() {
  return <ServiceView service={getService("rent-collection")!} />;
}
