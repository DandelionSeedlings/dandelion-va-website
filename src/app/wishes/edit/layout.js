// Private or step-in-a-flow pages: keep them out of Google.
export const metadata = { robots: { index: false, follow: false } }

export default function NoIndexLayout({ children }) {
  return children
}
