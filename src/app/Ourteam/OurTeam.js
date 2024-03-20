import Image from "next/image";
import jamelimg from "../../../public/images/team/jamel.png";
import steveimg from "../../../public/images/team/ahn.png";
import simonimg from "../../../public/images/team/simon.png";
import hanimg from "../../../public/images/team/han.png";
const OurTeam = () => {
    return (
        <>
            <div className="team-blk">
                <div className="container">
                    <div className="row team-brd">
                        <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
                            <div className="tm-mbr-blk">

                                <Image src={jamelimg} width={280}></Image>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8 col-xl-8 col-sm-12 team">
                            <h4>Jamiel Jamieson</h4>
                            <p>Jamiel Jamieson is a seasoned professional with over 15 years of experience in commodity trading across various industries. His expertise spans a wide range of products, from agricultural goods to precious metals. Throughout his career, Jamieson has demonstrated an exceptional ability to navigate the complexities of global markets, leveraging his keen insight and analytical skills to secure profitable deals for his clients.</p>
                            <p>
                                In addition to his accomplishments in commodity trading, Jamieson has also made significant strides in the realm of real estate and development. With a keen eye for lucrative opportunities and a deep understanding of market trends, he has successfully overseen numerous projects, ranging from residential developments to commercial ventures.
                            </p>
                            <p>
                                Born with an innate entrepreneurial spirit, Jamieson has always been driven by a relentless pursuit of excellence. His unwavering dedication to his craft, coupled with his commitment to integrity and professionalism, has earned him the respect and admiration of colleagues and clients alike. Beyond his professional endeavors, Jamieson is also actively involved in philanthropic efforts, supporting initiatives aimed at empowering disadvantaged communities and promoting economic growth.
                                As he continues to chart new paths and explore innovative opportunities, Jamiel Jamieson remains a steadfast leader in the fields of commodity trading, real estate, and development, leaving an indelible mark on the industries he serves.
                            </p>
                        </div>
                    </div>
                    <div className="row team-brd">
                        <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
                            <div className="tm-mbr-blk">

                                <Image src={steveimg} width={280}></Image>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8 col-xl-8 col-sm-12 team">
                            <h4>Steve Ahn</h4>
                            <p>A graduate of UC Irvine, Steve has been a strategic and business process consultant since 1999, collaborating with Fortune 500 companies in retail, entertainment, finance, healthcare, public sector, defense, and manufacturing industries. Steve's expertise lies in crafting strategic initiatives and architecting innovative solutions to meet the evolving needs of organizations across diverse sectors.  Steve currently serves as the Chief Strategic Officer and managing director in multiple companies, including software delivery, retail distribution, and finance.</p>
                        </div>
                    </div>

                    <div className="row team-brd">
                        <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
                            <div className="tm-mbr-blk">

                                <Image src={simonimg} width={280}></Image>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8 col-xl-8 col-sm-12 team">
                            <h4>Simon Kapita</h4>
                            <p>With over six years at Impel Inc, a leading commodity trading company, I've optimized operations and driven growth through strategic insights and market expertise. Leveraging my proficiency as a certified Scrum Master, I've successfully integrated Agile project management methodologies to enhance efficiency and adaptability within our operations. My ability to navigate complex markets, manage risk, and execute strategic initiatives has bolstered Impel Inc's market presence and profitability. Committed to excellence and innovation, I am dedicated to driving ongoing success in the dynamic realm of commodity trading.</p>
                        </div>
                    </div>
                    <div className="row team-brd">
                        <div className="col-md-6 col-lg-4 col-xl-4 col-sm-12">
                            <div className="tm-mbr-blk">

                                <Image src={hanimg} width={280}></Image>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8 col-xl-8 col-sm-12 team">
                            <h4>Steve Han</h4>
                            <p>STEVE HAN USA, Korea, Africa, Asia, South America, Global Outreach</p>
                            <p>Steve Han founded Trinity Investment in 1999 because he saw the need for a better kind of Brokerage Company. During his 16-year career and foundation in Business law, he has brokered well over 100 billion dollars in real estate transactions, which include office buildings, retail centers, shopping centers, land development, apartment complexes, mobile home parks, mini storages, HUD financed transactions and bond-financed properties.</p>
                            <p>Steve Han's present desire and excitement stem from his interest and passion for facilitating and transacting large commodity agreements. Transactions from petroleum and oil products to sophisticated trades of precious metals, stones and even fine art with many contracts totaling in the billions! He is part of the very minor percentage of people in this world who have the -know-how -and the -connections to handle such transactions of this magnitude.</p>
                            <p>Steve Han rallied to Teslar with not only a rich marketing and sales background but also an active financial investment expertise contributing to the companies varied product line. As the other members of the Teslar team, his final goal is to empower the world to become a better place, applying his abilities to create a safer, stronger, peaceful world.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurTeam