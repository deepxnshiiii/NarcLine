export default function BlogHero() {
    return (
        <div className="relative my-5 px-12 py-10 bg-[#E0F7FF] rounded-3xl text-justify">
            <h2 className="text-[#266AFB] text-[3rem] tracking-tight font-semibold">
                Blogs
            </h2>
            <p className="text-[1.1rem] text-[#003588]">
                The road to recovery and understanding addiction is a personal
                one. Our community blog is a platform where individuals can
                share their personal stories, struggles, and successes. From
                those in recovery to family members, anyone can submit their
                story to inspire, connect, and offer hope to others who may be
                going through similar situations.
                <dl>
                    <dt className="mt-3 ml-4 before:content-['•'] before:mr-3n">
                        <strong>Share Your Story:</strong>
                        <dd>
                            Feel empowered to share your own experience with
                            drug addiction, recovery, or supporting someone who
                            is struggling. Your words may be the hope someone
                            else is looking for.
                        </dd>
                    </dt>
                    <dt className="mt-3 ml-4 before:content-['•'] before:mr-3">
                        <strong>Learn From Others:</strong>
                        <dd>
                            Read stories of resilience, recovery, and survival.
                            Gain insights and inspiration from individuals who
                            have walked the path and emerged stronger.
                        </dd>
                    </dt>
                </dl>
            </p>

            <h1 className="before:content-[''] before:absolute before:bottom-0 before:right-24 before:h-12 before:w-12 before:bg-transparent before:rounded-br-3xl before:shadow-[0_22px_0_0_#FFF]"></h1>
            <div className="absolute bottom-0 right-0 py-12 px-12 bg-white rounded-tl-2xl"></div>
            <h1 className="before:content-[''] before:absolute before:bottom-24 before:right-0 before:h-12 before:w-12 before:bg-transparent before:rounded-br-3xl before:shadow-[0_22px_0_0_#FFF]"></h1>
        </div>
    );
}
