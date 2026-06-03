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


const customer: Customer = {
    id: 1,
    name: 'Adinova Indra',
    type: CustomerType.Gold
}
