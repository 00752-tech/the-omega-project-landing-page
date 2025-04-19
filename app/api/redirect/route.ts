import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const source = searchParams.get("source") || "unknown"

  // Base affiliate link
  const baseUrl = "https://828b6-d1j7dx0x5esds-4rh44p.hop.clickbank.net"

  // Add UTM parameters for tracking
  const redirectUrl = `${baseUrl}?utm_source=omega_project&utm_medium=website&utm_campaign=${source}`

  // Log click for server-side analytics (optional)
  console.log(`Redirect click from: ${source}`)

  return NextResponse.redirect(redirectUrl, {
    status: 302,
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  })
}
