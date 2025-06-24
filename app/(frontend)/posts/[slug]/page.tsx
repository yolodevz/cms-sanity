import {client} from '@/sanity/lib/client'
import {POST_QUERY, POSTS_QUERY} from '@/sanity/lib/queries'
import { type PortableTextBlock } from "next-sanity";
import PortableText from "@/components/portable-text";
import CoverImage from "@/components/cover-image";
import DateComponent from "@/components/date";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
    const { slug } = await params;

    const post = await client.fetch(POST_QUERY, {slug})

    if (!post) {
        return <div>nothing here yet</div>
    }

    return (
        <div className="container mx-auto px-5">
            <article>
                <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
                    {post.title}
                </h1>
                <div className="hidden md:mb-12 md:block">
                    {/*{post.author}*/}
                </div>
                <div className="mb-8 sm:mx-0 md:mb-16">
                    <CoverImage image={post.mainImage} priority />
                </div>
                <div className="mx-auto max-w-2xl">
                    <div className="mb-6 block md:hidden">
                        {/*{post.author}*/}
                    </div>
                    {post.publishedAt ? <div className="mb-6 text-lg">
                        <div className="mb-4 text-lg">
                            <DateComponent dateString={post.publishedAt}/>
                        </div>
                    </div> : null}
                </div>
                {post.body?.length && (
                    <PortableText
                        className="mx-auto max-w-2xl"
                        value={post.body as PortableTextBlock[]}
                    />
                )}
            </article>
        </div>
    )
}