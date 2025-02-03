'use server'

interface AuthResponse{
    error: null | string,
    success: boolean,
    data: unknown | null;
}

export async function signup(formData: FormData): Promise<AuthResponse>