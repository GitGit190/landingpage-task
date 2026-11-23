export type BillingPlan = 'free' | 'personal' | 'organization'

export type Billing = {
    type: BillingPlan,
    price: number,
    description: string,
    benefits: string[]
}