export interface UserProps {
  user: {
    id: string
    name: string
    email: string
    password: string
    phone: string
    role: string
    created_at: Date
    updated_at: Date
  }
  token: string | undefined
}

export interface SignInProps {
  email: string
  password: string
}

export interface DoctorProps {
  id: string
  name: string
  specialty: string
  created_at: Date
  updated_at: Date
}

export interface ConsultProps {
  date: string
  comments: string
  doctorId?: string
  created_at?: Date
  updated_at?: Date
}
