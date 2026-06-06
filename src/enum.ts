export enum CustomerType {
    Silver = 'Silver',
    Gold = 'Gold',
    Platinum = 'Platinum'
}

export type Customer = {
    id: number
    name: string
    type: CustomerType
}