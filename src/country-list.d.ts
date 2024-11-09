declare module "country-list" {
    export function getName(code: string): string;
    export function getNames(): string[];
    export function getCode(name: string): string;
    export function getCodes(): string[];
    export function getData(): { code: string; name: string }[];
  }
  