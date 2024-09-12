import "./globals.css";

export const metadata = {
  title: "Patcharaluk Port's",
  icons: {
    icon: '/favicon.png'},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>  <link rel="icon" href="/favicon.png" /> </head>
      <body>{children}</body>
    </html>
  );
}
