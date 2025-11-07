export interface SectionContainerProps {
    id: string;
    title: string;
    description: string;
    style?: string;
    children: React.ReactNode;
}

export interface CareerItem {
    title: string;
    year: string;
    description?: string;
    content?: string[];
}

export interface CareerDB {
    education: CareerItem[];
    courses: CareerItem[];
    experience: CareerItem[];
}

export interface ProjectDB {
    id: number;
    title: string;
    description: string;
    image: string;
    skill: { front: string[]; back: string[]; deploy: string[] };
    github: string;
    web: string;
    purpose: string;
    features: string[];
    skillBackground?: { name: string; description: string }[];
    structure?: string;
    design: { title: string; image: string }[];
    troubleShooting?: {
        title: string;
        issue: string;
        solution: { content: string; code?: string; image?: string }[];
    }[];
}

export interface ProjectCard {
    item: ProjectSummary;
}
export interface NavItem {
    item: { id: string; name: string; href: string };
    active: string;
    onClick: () => void;
}

export type Stacks = Stack[];

export interface Stack {
    name: string;
    image: string;
    description: string;
}
type ProjectSummary = Pick<ProjectDB, 'id' | 'title' | 'description' | 'image' | 'skill'>;
