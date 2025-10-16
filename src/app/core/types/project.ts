export interface Project {
    title: string;
    img?: string;
    video?: string;
    model3D?: string;
    type: 'image' | 'video' | '3d';
    desc: string;
}

export interface Category {
    name: string;
    projects: Project[];
}