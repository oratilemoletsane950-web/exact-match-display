import type { Group, Template } from "@/lib/portfolio/types";

import {
  EducationModule,
  BankingModule,
  HealthModule,
  HospitalityModule,
  RetailModule,
} from "./modules";
import {
  AutomotiveModule,
  CreativeModule,
  ProfessionalModule,
  PropertyModule,
  TechModule,
} from "./modules-b";

/** One working product module per business group. */
export function IndustryModule({ tpl, group }: { tpl: Template; group: Group }) {
  switch (group.slug) {
    case "banking":
      return <BankingModule tpl={tpl} group={group} />;
    case "healthcare":
      return <HealthModule tpl={tpl} group={group} />;
    case "retail":
      return <RetailModule tpl={tpl} group={group} />;
    case "hospitality":
      return <HospitalityModule tpl={tpl} group={group} />;
    case "education":
      return <EducationModule tpl={tpl} group={group} />;
    case "technology":
      return <TechModule tpl={tpl} group={group} />;
    case "property":
      return <PropertyModule tpl={tpl} group={group} />;
    case "automotive":
      return <AutomotiveModule tpl={tpl} group={group} />;
    case "professional":
      return <ProfessionalModule tpl={tpl} group={group} />;
    case "creative":
      return <CreativeModule tpl={tpl} group={group} />;
    default:
      return null;
  }
}
