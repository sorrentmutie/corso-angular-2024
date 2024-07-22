export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export interface User { 
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    roles: string[]
}