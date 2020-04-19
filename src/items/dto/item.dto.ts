import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType('Item')
export class ItemDTO {

    @Field(type => ID)
    readonly _id?: string;

    @Field(type => String)
    readonly title: string;

    @Field(type => Int)
    readonly price: number;

    @Field(type => String)
    readonly description: string;
}