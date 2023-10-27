export interface Clients  {
    id: number
    name: string
    address: string 
    commonSite: string 
    clientStatus: string 
    refered: boolean
    phone: string 
    debt: number
}

export interface Prices {
    id: number
    from: string
    to: string
    price: number
}

export interface Travels {
    id: number
    clientName: string 
    origin: string 
    destination: string 
    date: string 
    hour: string 
    completed: boolean 
    debt: boolean
}