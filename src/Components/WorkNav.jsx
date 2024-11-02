export default function WorkNav() {
    const data = [
        {
            title: "Secure Reporting",
            description:
                "Experience hassle-free reporting of drug trafficking activities with NarcLine. Our platform makes sure that filing a report is easy, fast, and—above all—secure. We ensure the security of your contribution and safeguard your identity by using cutting-edge encryption technologies.",
        },
        {
            title: "Analyze and Take Action",
            description:
                "Ensure that every report is handled with care and precision. Each input is carefully examined by our team of experts to ensure that all information is correct and pertinent. After verification, we forward the data to the relevant authorities, NGOs, or law enforcement for prompt action.",
        },
        {
            title: "Community Engagement and Support",
            description:
                "Ensure people to interact with one another through blogs, peer support groups, and specialized forums. Our community offers a forum for candid conversation, help from one another, and coordinated efforts to combat drug misuse, regardless of whether you're looking for assistance or just want to tell your story.",
        },
        {
            title: "Education and Empowerment",
            description:
                "Empowers users with access to comprehensive educational resources. We provide interactive tutorials, informative webinars, and expert advice on drug prevention, safety measures, and recovery strategies.",
        },
    ];

    return (
        <div className="flex flex-col gap-24 pl-10">
            {data.map((elem, index) => (
                <div key={index} className="text-[#003588]">
                    <div className="w-[35rem]">
                        <h5 className="text-4xl font-medium pb-6">
                            {elem.title}
                        </h5>
                        <p className="text-lg text-[#033e9ec9]">
                            {elem.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
