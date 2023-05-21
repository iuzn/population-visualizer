import "@/styles/globals.css";

export const metadata = {
    title: "Precedent - Building blocks for your Next.js project",
    description:
        "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    twitter: {
        card: "summary_large_image",
        title: "Precedent - Building blocks for your Next.js project",
        description:
            "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
        creator: "@steventey",
    },
    metadataBase: new URL("https://precedent.dev"),
    themeColor: "#FFF",
};

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="h-auto min-h-screen">
        <main className="h-auto min-h-screen flex flex-col justify-center items-center overflow-hidden">
            {children}
        </main>
        </body>
        </html>
    );
}
