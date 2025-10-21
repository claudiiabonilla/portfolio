export interface Project {
    key: string;
    title: string;
    img?: string;
    video?: string;
    model3D?: string;
    type: 'image' | 'video' | '3d';
    desc: string;
}

export interface Category {
    key: string;
    name: string;
    projects: Project[];
}