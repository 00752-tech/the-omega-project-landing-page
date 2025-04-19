import { redirect } from "next/navigation"

export default function RedirectPage() {
  // Server-side redirect that won't be blocked by security policies
  redirect("https://828b6-d1j7dx0x5esds-4rh44p.hop.clickbank.net")

  // This part won't be reached but is needed for TypeScript
  return null
}
