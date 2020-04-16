
export interface PaperId {
    repo: string;
    id: string;
}

export interface Paper {
    ids: PaperId[];
    title: string;
    titleNorm?: string;
    type: string;
    summary?: string;
    authors: Author[];
    languages?: string[];
    year?: number;
    date?: string;
    source: Source;
    urls: WebLocation[];
    citations?: number;
    pages?: string;
    doi?: string;
    keywords?: string[];
}

export interface Author {
    id?: string;
    firstName: string;
    lastName: string;
    affiliation?: string;
    order: number;
}

export interface Source {
    name?: string;
    publisher?: string;
    venue?: string;
    venueShort?: string;
}

export interface WebLocation {
    name: string;
    url: string;
}

export interface ProjectInfo {
    id: string;
    title: string;
    updated: string;
}

export interface Project {
    id: string;
    title: string;
    accepted: ProjectPaper[];
    rejected: ProjectPaper[];
    readLater: ProjectPaper[];
}

export interface ProjectPaper {
    id: PaperId;
    notes?: string;
    tags: string[];
}

export interface ActionResponse {
    errors: string[];
    result?: any;
}

export interface ProjectActionRequest {
    projectId: string;
    action: "CREATE" | "DELETE";
}

export interface SearchResult {
    paper: Paper;
    timestamp: number;
}
