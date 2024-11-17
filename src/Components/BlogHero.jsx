export default function BlogHero() {
    return (
        <div className="relative my-5 px-12 py-10 bg-[#E0F7FF] rounded-3xl text-justify">
            <h2 className="text-[#266AFB] text-[3rem] tracking-tight font-semibold">
                Blogs
            </h2>
            <div className="text-lg text-[#003588]">
                <p className="mb-4">
                    Recovery is a journey to learn and find out an addict's true
                    characteristics, which is different for everyone. Our
                    community blog is a vivid platform where people can come
                    together to share their thoughts, ideas, and experiences.
                    Through these posts, individuals share their unique personal
                    stories, the various struggles they have faced, and the
                    successes they have achieved. All recovered individuals,
                    their family, and other supporters are encouraged to send in
                    their stories meant to inspire, connect and send hope to
                    others who may be experiencing similar situations.
                </p>

                <dl>
                    <div className="mt-3 ml-4">
                        <dt className="before:content-['•'] before:mr-3">
                            <strong>Share Your Story:</strong>
                        </dt>
                        <dd>
                            Feel empowered to share your own experience with
                            drug addiction, recovery, or supporting someone who
                            is struggling. Your words may be the hope someone
                            else is looking for.
                        </dd>
                    </div>
                    <div className="mt-3 ml-4">
                        <dt className="before:content-['•'] before:mr-3">
                            <strong>Learn From Others:</strong>
                        </dt>
                        <dd>
                            Read stories of resilience, recovery, and survival.
                            Gain insights and inspiration from individuals who
                            have walked the path and emerged stronger.
                        </dd>
                    </div>
                </dl>
            </div>

            <h1 className="before:content-[''] before:absolute before:bottom-0 before:right-24 before:h-12 before:w-12 before:bg-transparent before:rounded-br-3xl before:shadow-[0_22px_0_0_#FFF]"></h1>
            <div className="absolute bottom-0 right-0 py-12 px-12 bg-white rounded-tl-2xl"></div>
            <h1 className="before:content-[''] before:absolute before:bottom-24 before:right-0 before:h-12 before:w-12 before:bg-transparent before:rounded-br-3xl before:shadow-[0_22px_0_0_#FFF]"></h1>
        </div>
    );
}
