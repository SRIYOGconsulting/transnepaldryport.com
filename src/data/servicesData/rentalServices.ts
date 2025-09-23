import fleet_size from '../../assets/img/services/rentalService/logo/fleet_size.svg';
import happy_clients from '../../assets/img/services/rentalService/logo/happy_clients.svg';
import years_of_experience from '../../assets/img/services/rentalService/logo/years_of_experience.svg';
import agailability_rate from '../../assets/img/services/rentalService/logo/availability_rate.svg';

import rental_guaranteed from '../../assets/img/services/rentalService/logo/rental_guaranteed.svg';
import flexible_solutions from '../../assets/img/services/rentalService/logo/flexible_solutions.svg';
import cost_effective from '../../assets/img/services/rentalService/logo/cost_effective.svg';

export const RENTAL_SERVICES = {
    title: 'RENTAL SERVICES',
    description: [
        `Welcome to Allcargo Logistics Limited Rental Services, your go-to solution for seamless cargo transportation. With a commitment to excellence and a proven track record in the logistics industry, we offer a diverse fleet of vehicles and equipment maintained to the highest standards, ensuring reliability and efficiency every step of the way. Whether you're moving goods locally or across borders, our flexible rental options and expert support guarantee a hassle-free experience tailored to your needs.`,

        `At Allcargo, we understand the importance of cost-effectiveness and convenience. That's why our nationwide coverage and customizable rental plans make us the preferred choice for businesses of all sizes. Whether you require short-term rentals for temporary projects or long-term leases for ongoing operations, our dedicated team is here to provide personalized solutions that fit your budget and timeline. Experience the difference with Allcargo Logistics Limited Rental Services - contact us today to unlock a world of efficient transportation solutions.`
    ],

    logoWithAmountAndTitle: [
        {
            title: 'Fleet Size',
            amount: '10',
            logo: fleet_size
        },
        {
            title: 'Happy Clients',
            amount: '1000',
            logo: happy_clients
        },
        {
            title: 'Years of Experience',
            amount: '10',
            logo: years_of_experience
        },
        {
            title: 'Availability Rate',
            amount: '99%',
            logo: agailability_rate
        }
    ],
    keyBenifits: [
        {
            title: 'Rental Guaranteed',
            description:
                'Our diverse fleet is maintained to the highest standards, ensuring reliability and efficiency every step of your cargo transportation journey.',
            logo: rental_guaranteed
        },
        {
            title: 'Flexible Solutions',
            description:
                'From short-term rentals for temporary projects to long-term leases for ongoing operations, we provide personalized solutions that fit your timeline.',
            logo: flexible_solutions
        },
        {
            title: 'Cost Effective',
            description:
                'Our nationwide coverage and customizable rental plans make us the preferred choice for businesses focused on budget efficiency.',
            logo: cost_effective
        }
    ]
};
