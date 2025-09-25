import { CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaFax, FaYoutube } from 'react-icons/fa';

export const CONTACT = {
    overview: {
        title: 'Contact',
        subtitle:
            'We are next to your single call, feel free to get informed!! ',
        description:
            'TransNepal Freight Services Pvt. Ltd. started in 2002, taking over management of two ICDs in Biratnagar and Bhairahawa on lease from the Nepal Intermodal Transport Development Board for ten years, as directed by the Nepalese government.'
    },
    address: {
        line1: 'TransNepal Tower, Piyush Marg',
        city: 'Biratnagar-05 Nepal'
    },
    contact: [
        {
            title: 'Telephone',
            details: '+977 21 501441',
            url: 'tel:+977 21 501441'
        },
        {
            title: 'Fax',
            details: '+977 21501470',
            url: 'tel:+977 21501470'
        },
        {
            title: 'Email',
            details: 'transnepal_brt@transnepaldryport.com',
            url: 'mailto:transnepal_brt@transnepaldryport.com'
        }
    ],
    workingHours: {
        weekdays: '10:00 AM - 6:00 PM'
    },
    socialMedia: [
        {
            name: 'facebook',
            icon: <FaFacebook />,
            url: 'https://www.facebook.com/yourpage'
        },
        {
            name: 'linkedin',
            icon: <CiLinkedin />,
            url: 'https://www.linkedin.com/company/yourcompany'
        },
        {
            name: 'youtube',
            icon: <FaYoutube />,
            url: 'https://www.youtube.com/yourchannel'
        }
    ]
};
