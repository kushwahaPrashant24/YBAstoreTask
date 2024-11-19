import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#181818] m-10 ">
        {children}
      </body>
    </html>
  );
}
