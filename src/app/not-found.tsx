import Link from "next/link"
import { profile } from "@/content/profile"

export const metadata = { title: `Page not found | ${profile.name}` }

export default function NotFound() {
  return (
    <main className="shell flex min-h-dvh flex-col justify-center py-24">
      <p className="tag">404</p>
      <h1 className="display-2 mt-5">This page does not exist.</h1>
      <p className="lead prose-w mt-5">
        Everything lives on one page. Head back to the start.
      </p>
      <div className="mt-9">
        <Link href="/" className="btn btn-primary">
          Back to the homepage
        </Link>
      </div>
    </main>
  )
}
