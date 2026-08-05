import type { Plan } from "./types";

export function usagePercent(plan: Plan) {
  return plan.isPro ? 100 : Math.round((plan.used / plan.cap) * 100);
}

/** The bar only turns amber once usage is past 70%, not at it. */
export function usageBarClass(plan: Plan) {
  if (plan.isPro) return "bg-success";
  return plan.used / plan.cap > 0.7 ? "bg-warning" : "bg-accent";
}
