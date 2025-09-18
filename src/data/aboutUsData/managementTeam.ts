import capt_mayur_paralkar from "../../assets/img/about/managementTeam/capt_mayur_paralkar.png";
import anand_kumar_singh from "../../assets/img/about/managementTeam/anand_kumar_singh.png";
import pankaj_rathi from "../../assets/img/about/managementTeam/pankaj_rathi.png";
import bhim_raj_joshi from "../../assets/img/about/managementTeam/bhim_raj_joshi.png";

type MembersProps = {
    id: number;
    img: string;
    name: string;
    post: string;
    description: string;
}
export const MANAGEMENT_TEAM : MembersProps[] = [
    {
        id: 1,
        name: "Capt. Mayur Paralkar",
        post: "Advisor",
        description: "Capt. Mayur Parlalkar brings decades of expertise in maritime and logistics, having led shipping, port operations, and supply chain management. He has driven strategic initiatives, improved operational efficiency, and supported sustainable growth across regions. With deep knowledge of transportation systems and international trade, he advises on strategic planning, risk management, and process optimization, fostering innovation and shaping long-term growth in the logistics sector.",
        img: capt_mayur_paralkar
    },
    {
        id: 2,
        name: "Anand Kumar Singh",
        post: "General Manager",
        description: "Mr.Anand Kumar Singh represents Allcargo Logistics Ltd. in Nepal and at present holds the position of General Manager in the company. He is responsible for overseeing company's business and reporting to it's headquarter in Mumbai, India. He joined the company in the year 2002 as in charge of Bhairahawa ICD and later deputed as Finance and Administrative head in the year 2005 at company's head office at Biratnagar.",
        img: anand_kumar_singh
    },
    {
        id: 3,
        name: "Bhim Raj Joshi",
        post: "Director",
        description: "Mr. Laxmi Subba serves as Manager at ICP Biratnagar under Trans Nepal. With extensive experience in transport operations and supply chain management, he plays a vital role in overseeing the smooth functioning of the ICP and ensuring efficient coordination across operations. His leadership, strategic insight, and commitment to service excellence have been instrumental in enhancing operational efficiency, implementing effective policies, and strengthening Trans Nepal’s position in Nepal’s logistics and transportation sector.",
        img: bhim_raj_joshi
    },
    {
        id: 4,
        name: "Pankaj Rathi",
        post: "Director",
        description: "Mr. Rajesh Babu Tiwari serves as Manager at ICD Kakadbhitta under Trans Nepal. With extensive experience in transport management, customs operations, and cross-border trade facilitation, he is responsible for ensuring the smooth and efficient functioning of the terminal. His strong leadership, in-depth industry knowledge, and commitment to operational excellence have significantly contributed to enhancing service standards and optimizing workflows. Through his dedication and professional expertise, Mr. Tiwari plays a vital role in strengthening Trans Nepal’s reputation as a trusted leader in Nepal’s logistics and transportation sector.",
        img: pankaj_rathi
    },
]
