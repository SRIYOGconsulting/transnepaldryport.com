import mr_mukesh_rathi from '../../assets/img/home/testimonials/mr_mukesh_rathi.svg';
import mr_suresh_kumar_r from '../../assets/img/home/testimonials/mr_suresh_kumar_r.svg';

type Testimonial = {
    id: number;
    name: string;
    position: string;
    testimonial: string;
    img?: string;
};

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Mr Mukesh Rathi',
        position: 'Managing Director, Rathi Group',
        testimonial:
            'TransNepal’s solutions are user-friendly, innovative, and low cost. We wish them success in all their endeavors.',
        img: mr_mukesh_rathi
    },
    {
        id: 2,
        name: 'Mr. Suresh Kumar R',
        position: 'CEO- All Cargo Logistic Limited',
        testimonial:
            'TransNepal’s proactive efforts have helped us to maintain strong relationships with our customers. Thank you for your marvelous efforts.',
        img: mr_suresh_kumar_r
    }
];
