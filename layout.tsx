export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fn">
      <body>{children}</body>
    </html>
  )
}