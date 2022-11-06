export interface Job {
    id: string,
    name: string,
    email: string,
    phone: string,
    title: string,
    salary: string,
    address: string,
    benefits: Array<string>,
    location: JobMap,
    pictures: Array<string>,
    createdAt: string,
    updatedAt: string,
    description: string,
    employment_type: Array<string>
}

export interface JobMainInfo {
    title: string,
    salary: string,
    createdAt: string,
    description: string
}

export interface JobAdditionalInfo {
    employment_type: Array<string>,
    benefits: Array<string>
}


export interface JobLocation {
    name: string,
    address: string,
    phone: string,
    email: string,
    location: JobMap
}

export interface JobMap {
    lat: number,
    long: number
}