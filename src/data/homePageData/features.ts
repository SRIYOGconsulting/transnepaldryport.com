import parking from '../../assets/img/home/fleatures/parking.svg';
import automated_billing from '../../assets/img/home/fleatures/automated_billing.svg';
import warehouse_and_storage from '../../assets/img/home/fleatures/warehouse_and_storage.svg';
import Weightment from '../../assets/img/home/fleatures/weightment.svg';
import crane_and_forklift_facility from '../../assets/img/home/fleatures/crane_and_forklift_facility.svg';
import free_wifi_zone from '../../assets/img/home/fleatures/free_wifi_zone.svg';
import cctv from '../../assets/img/home/fleatures/cctv.svg';
import banking from '../../assets/img/home/fleatures/banking.svg';
import round_the_clock_security from '../../assets/img/home/fleatures/round_the_clock_security.svg';

type Features = {
    title: string;
    description: string;
    img: string;
};
export const FEATURES: Features[] = [
    {
        title: 'Parking',
        description:
            'Both terminals have parking facilities for vehicles. Biratnagar ICP has the capacity to accommodate more than 150 vehicles, and Bhairahawa ICD has more than 250 vehicles at a time.',
        img: parking
    },
    {
        title: 'Warehouse and Storage',
        description:
            'Covered warehouse of 55x25 meters with a 1.2-meter high-level platform at both terminals. Additional fully covered warehouse of similar size in ICP Biratnagar.',
        img: warehouse_and_storage
    },
    {
        title: 'Weightment',
        description:
            'When the company took charge of our terminal in the year 2002, there were no weighing facilities. To facilitate this activity, the company installed a 100-ton capacity Digital Weighbridge.',
        img: Weightment
    },
    {
        title: 'Automated Billing',
        description:
            'TransNepal provides system of Automated Billing in Order to predetermine date to pay a recurring bill.Speed up billing operations without losing attention to detail. Group customers together and set up automated billing schedules and rules for each grou',
        img: automated_billing
    },
    {
        title: 'Crane & Forklift Facility',
        description:
            'In the current situation, the company is pleased to introduce Escorts F-15 pick & carry crane in Biratnagar, one Forklift-3000kgs HYUNDAI make in Biratnagar, and one Forklift-3000kgs Ace Make in Bhairahawa.',
        img: crane_and_forklift_facility
    },
    {
        title: 'Free WI-FI Zone',
        description:
            'In order to build sound connectivity and easier information sharing which ultimately lead to facilitating trade and commerce, the company has provided wi-fi facility at administrative block of both the ICDs at free of cost w.e.f.i.e 13th April, 2016.',
        img: free_wifi_zone
    },
    {
        title: 'CCTV',
        description:
            "In order to build strict watch and surveillance system that allows you to keep an eye on what's going on in and around your business. Cameras and monitors enable you to view events live, and recorders archive footage for later reference.",
        img: cctv
    },
    {
        title: 'Banking',
        description:
            'n order to make transactions easy and secure, TransNepal provides banking facilities including all types of secured and unsecured banking facilities, loans, advances, credit facilities, and financial arrangements.',
        img: banking
    },
    {
        title: 'Round the Clock Security',
        description:
            'In order to protect persons and prevent damage or destruction to property, TransNepal provides round-the-clock security in the parking area. A batch of 16 security personnel, which include a security incharge and supervisor, remains deployed around the clock in the parking area.',
        img: round_the_clock_security
    }
];
