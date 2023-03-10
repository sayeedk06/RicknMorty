
export interface ErrorTypes {
    statusCode: number,
    message: string
}


export interface Character {
    info:    Info;
    results: Result[];
}

export interface CardBackprops {
    location_name: string;
    location_url: string | string[]
}

export interface Cardprops {
    key: number; 
    name: string; 
    status: Status
    species: Species; 
    type: string; 
    gender: Gender; 
    image: string; }


export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null | string;
}

export interface Result {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
