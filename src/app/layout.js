import "./globals.css";

export const metadata = {
  title: "Patcharaluk Port's",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
