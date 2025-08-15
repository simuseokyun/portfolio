export interface ProjectDB {
    id: number;
    title: string;
    description: string;
    image: string;
    skill: { front: string[]; back: string[] };
    github: string;
    purpose: string;
    features: string[];
    skillBackground: { name: string; description: string }[];
    structure: string;
    design: { title: string; image: string }[];
    troubleShooting: { title: string; issue: string; solution: string }[];
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
