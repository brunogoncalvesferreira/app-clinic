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
  id: string
  date: string
  comments: string
  date_consult: string
  hours: string
  status: string
  doctorId?: string
  created_at?: Date
  updated_at?: Date
  doctor_id?: {
    id: string
    name: string
    specialty: string
    created_at: string
    updated_at: string
  }
  user_id?: {
    id: string
    name: string
    email: string
    password: string
    phone: string
    role: string
    created_at: string
    updated_at: string
  }
}
