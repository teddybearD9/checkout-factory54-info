import "@shopify/ui-extensions/preact";
import {render} from "preact";

type BannerTone = "auto" | "info" | "warning" | "success" | "critical";

const VALID_TONES: BannerTone[] = [
  "auto",
  "info",
  "warning",
  "success",
  "critical",
];

export default function extension() {
  render(<Extension />, document.body);
}

function asString(
  value: string | number | boolean | undefined,
  fallback: string,
): string {
  if (typeof value === "string" && value.length > 0) {
    return value;
  }
  return fallback;
}

function asTone(value: string | number | boolean | undefined): BannerTone {
  if (typeof value === "string" && VALID_TONES.includes(value as BannerTone)) {
    return value as BannerTone;
  }
  return "info";
}

function Extension() {
  const customer = shopify.buyerIdentity.customer.value;
  const settings = shopify.settings.value;

  if (!customer?.id) {
    return null;
  }

  const tone = asTone(settings.banner_tone);
  const message = asString(
    settings.banner_message,
    "תודה שאתה לקוח מחובר!",
  );

  return (
    <s-banner tone={tone}>
      <s-paragraph>{message}</s-paragraph>
    </s-banner>
  );
}
