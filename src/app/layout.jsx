import "./globals.css";



export const metadata = {
  title: "Taller promesas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
