export interface Job {
    id: string,
    name: string,
    email: string,
    phone: string,
    title: string,
    salary: string,
    address: string,
    benefits: Array<string>,
    location: Object,
    pictures: Array<string>,
    createdAt: string,
    updatedAt: string,
    description: string,
    employment_type: Array<string>
}

export interface JobMainInfo {
    name: string,
    title: string,
    salary: string,
    createdAt: string,
    description: string
}

export interface JobAdditionalInfo {
    employment_type: Array<string>,
    benefits: Array<string>
}
