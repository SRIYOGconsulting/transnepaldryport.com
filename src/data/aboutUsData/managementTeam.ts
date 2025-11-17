import capt_mayur_paralkar from '../../assets/img/about/managementTeam/capt_mayur_paralkar.png';
import anand_kumar_singh from '../../assets/img/about/managementTeam/anand_kumar_singh.png';
import rajesh_babu_tiwari from '../../assets/img/about/managementTeam/rajesh_babu_tiwari.png';
import laxmi_subba from '../../assets/img/about/managementTeam/laxmi_subba.png';

type MembersProps = {
    id: number;
    img: string;
    name: string;
    post: string;
    description: string;
};
export const MANAGEMENT_TEAM: MembersProps[] = [
    {
        id: 1,
        name: 'Capt. Mayur Paralkar',
        post: 'Advisor',
        description: '',
        img: capt_mayur_paralkar
    },
    {
        id: 2,
        name: 'Anand Kumar Singh',
        post: 'General Manager',
        description:
            "Mr. Anand Kumar Singh represents Allcargo Logistics Ltd. in Nepal and at present holds the position of General Manager in the company. He is responsible for overseeing company's business and reporting to it's headquarter in Mumbai, India. He joined the company in the year 2002 as in charge of Bhairahawa ICD and later deputed as Finance and Administrative head in the year 2005 at company's head office at Biratnagar.",
        img: anand_kumar_singh
    },
    {
        id: 3,
        name: 'Laxmi Subba',
        post: ' Manager- ICP Biratnagar',
        description: '',
        img: laxmi_subba
    },
    {
        id: 4,
        name: 'Rajesh Babu Tiwari',
        post: 'Manager ICD Kakadbhitta',
        description: '',
        img: rajesh_babu_tiwari
    }
];
