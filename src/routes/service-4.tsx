import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/service-4")({
  beforeLoad: () => {
    throw redirect({ to: "/services" });
  },
});
