import storage from '../../assets/img/home/services/storage.png';
import cargo_handling from '../../assets/img/home/services/cargo_handling.png';
import weighment from '../../assets/img/home/services/weighment.jpg';

type Services = {
    id: number;
    title: string;
    description: string;
    img: string;
};
export const SERVICES: Services[] = [
    {
        id: 1,
        title: 'Storage',
        description:
            'Covered Warehouse of 55 x 25 meter with 1.2 meter high level platform in both the ICP Biratnagar and ICD Bhairahawa.',
        img: storage
    },
    {
        id: 2,
        title: 'Cargo Handling',
        description:
            'Earlier cargoes were being totally handled manually. In the current situation where handling activities have been transforming from manual to mechanical.',
        img: cargo_handling
    },
    {
        id: 3,
        title: 'Weigment',
        description:
            'Weighing activities were being carried out at remote locations making it costs ineffective and time consuming.',
        img: weighment
    }
];
