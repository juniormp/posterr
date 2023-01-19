import { Exclude, Expose, Transform } from "class-transformer"

export class User {
    id: string

    //@Transform(({ value }) => value.toUpperCase())
    name: string

    @Exclude()
    password: string

    email: string
    confirmed: boolean
    canceled:boolean
    typeId: number
    countryId: number

    @Exclude()
    registrationDate: Date

    constructor(partial: Partial<User>) {
        Object.assign(this, partial)
    }

    // @Expose()
    // get getNameAndId(): string {
    //     return `${this.username} ${this.id}`
    // }
}
