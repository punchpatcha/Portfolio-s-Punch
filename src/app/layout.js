import "./globals.css";

export const metadata = {
  title: "Patcharaluk Port's",
  icons: {
    icon: '/favicon.ico'},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
