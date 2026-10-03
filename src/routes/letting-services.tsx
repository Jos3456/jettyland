import { createFileRoute } from "@tanstack/react-router";
import { ServiceView } from "@/components/ServiceView";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/letting-services")({
  head: () => ({ meta: [{ title: "Letting Services – Jettyland Investments" }] }),
  component: Page,
});

function Page() {
  const service = getService("letting-services")!;
  return <ServiceView service={service} />;
}
