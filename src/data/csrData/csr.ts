import home from '../../assets/img/csr/logo/home.svg';
import health from '../../assets/img/csr/logo/health.svg';
import disaster from '../../assets/img/csr/logo/disaster.svg';
import logistics from '../../assets/img/csr/logo/logistics.svg';

import manav_sewa_ashram from '../../assets/img/csr/news/manav_sewa_ashram.png';
import green_initiative from '../../assets/img/csr/news/green_initiative.png';
import fight_against_covid from '../../assets/img/csr/news/fight_against_covid.png';
import all_cargo_recognized from '../../assets/img/csr/news/all_cargo_recognized.png';
import corona_jana_surksha_kosh from '../../assets/img/csr/news/corona_jana_surksha_kosh.png';
import relief_fund_collaborates from '../../assets/img/csr/news/relief_fund_collaborates.png';
import most_have_communication_skills from '../../assets/img/csr/news/most_have_communication_skills.png';

export const CORPORATE_SOCIAL_RESPONSIBILITY = {
    csr: [
        {
            title: 'Support for Rehabilitation',
            description: 'Building Hope through Infrastructure Support',
            logo: home
        },

        {
            title: 'Health Crisis Support',
            description: 'Strengthening Nepal’s Fight Against COVID-19',
            logo: health
        },

        {
            title: 'Disaster Relief Contributions',
            description: 'Quick Response to National Emergencies',
            logo: disaster
        },

        {
            title: 'Logistics Support During Crisis',
            description: 'Keeping the Nation Moving in Times of Crisis',
            logo: logistics
        }
    ],

    news: [
        {
            date: 'May 21, 2024',
            title: 'CSR-Manav Sewa Ashram ',
            description:
                'TransNepal Freight Services Pvt. Ltd contributed Rs. 5,11,111 to Manav Sewa Ashram, Biratnagar',
            img: manav_sewa_ashram
        },

        {
            date: 'December 1, 2020',
            title: 'CSR-Fight against COVID-19',
            description:
                'In its drive to fight against COVID-19 TransNepal has extended its hand to Nagarik Care Centre for construction...',
            img: fight_against_covid
        },

        {
            date: 'September 10, 2020',
            title: 'Green Initiatives to keep Environment clean by TransNepal',
            description:
                'Part of Green Initiatives and to keep the environment clean TransNepal  has planted 100 Ashoka Trees',
            img: green_initiative
        },

        {
            date: 'August 25, 2020',
            title: 'TransNepal contributes to Pradesh No.1 Corona Jana Suraksha Kosh ',
            description:
                'TransNepal contributes to Pradesh No.1 Corona Jana Suraksha Kosh and collaborates on other initiatives to bolster Nepal’s fight against COVID-19. ',
            img: corona_jana_surksha_kosh
        },

        {
            date: 'August 18, 2020',
            title: 'Allcargo Logistics contributes to CM’s Relief Fund collaborates to fight against COVID-19',
            description:
                'Mumbai, 2ndApril:  Allcargo Logistics, one of India’s biggest integrated logistics services provider and the global leader in LCL consolidation...',
            img: relief_fund_collaborates
        },

        {
            date: 'August 17, 2020',
            title: 'Allcargo recognises CSR partners’ efforts in positively impacting lives at Manthan 2020',
            description:
                'Discussing strategies and challenges in achieving sustainable CSR outcomes, leveraging opportunities to expand CSR outreach and recognizing the committed ',
            img: all_cargo_recognized
        },

        {
            date: 'March 8, 2020',
            title: '5 must-have communication skills for leaders',
            description:
                'Strong communication skills are a must for any successful sales person. Three in four employees see effective communication as the number one leadership attribute. ',
            img: most_have_communication_skills
        }
    ]
};
