import vision from '../../assets/img/about/visionAndMission/vision.jpg';
import mission from '../../assets/img/about/visionAndMission/mission.jpg';
import missionLogo from '../../assets/img/about/visionAndMission/missionLogo.svg';
import visionLogo from '../../assets/img/about/visionAndMission/visionLogo.svg';
export const VISION_AND_MISSION = {
    vision: {
        title: 'Vision',
        statement: 'Become a leader in ICP/ICD/CFS management in Nepal.',
        img: vision,
        logo: visionLogo
    },
    mission: {
        title: 'Mission',
        statements: [
            'Nurture long-term and good relationships with all stakeholders, public or private, through growth, trust, and honoring commitments.',
            'Deliver quality services and create a benchmark for operation and management of ICP/ICD/CFS in Nepal.',
            'Create better value for end users through knowledge, expertise, and technologies.'
        ],
        img: mission,
        logo: missionLogo
    }
};
