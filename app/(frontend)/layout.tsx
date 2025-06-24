import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/disable-draft-mode";
import { Header } from "@/components/header";
import { SanityLive } from "@/sanity/lib/live";

export default async function FrontendLayout({
                                                 children,
                                             }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="min-h-screen mt-24">
            <Header />
            {children}
            <SanityLive />
            {(await draftMode()).isEnabled && (
                <>
                    <DisableDraftMode />
                    <VisualEditing />
                </>
            )}
        </section>
    );
}