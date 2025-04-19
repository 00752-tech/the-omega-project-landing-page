"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

export function Breadcrumbs() {
  const pathname = usePathname()

  // Don't show breadcrumbs on homepage
  if (pathname === "/") return null

  // Create breadcrumb items based on path
  const pathSegments = pathname.split("/").filter((segment) => segment)

  return (
    <nav className="flex py-3 px-4 text-sm text-gray-600 border-b" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center hover:text-blue-600">
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`
          const isLast = index === pathSegments.length - 1

          // Format the segment for display (replace hyphens with spaces and capitalize)
          const formattedSegment = segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())

          return (
            <li key={segment}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                {isLast ? (
                  <span className="font-medium">{formattedSegment}</span>
                ) : (
                  <Link href={href} className="hover:text-blue-600">
                    {formattedSegment}
                  </Link>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
