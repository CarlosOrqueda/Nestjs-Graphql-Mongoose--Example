import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemDTO } from './dto/item.dto';
import { inputItemDTO } from './dto/inputItem.dto'

@Resolver('Items')
export class ItemsResolver {

    constructor(private readonly itemService: ItemsService) {}

    @Mutation(() => ItemDTO)
    async createItem(@Args('createItemDTO', {type: () => inputItemDTO}) createItemDto : inputItemDTO) : Promise<ItemDTO> {
        return await this.itemService.createItem(createItemDto);
    }

    @Query(() => [ItemDTO])
    async getItems() : Promise<ItemDTO[]> {
        return await this.itemService.getItems();
    }

    @Query(() => ItemDTO)
    async getItem(@Args('_id', {type: () => ID}) _id : string) : Promise<ItemDTO> {
        return await this.itemService.getItem(_id);
    }

    @Mutation(() => ItemDTO)
    async updateItem(@Args('_id', {type: () => ID}) _id : string, @Args('updateItem', {type: () => inputItemDTO}) updateItem : inputItemDTO) : Promise<ItemDTO> {
        return await this.itemService.updateItem(_id, updateItem);
    }

    @Mutation(() => ItemDTO)
    async deleteItem(@Args('_id', {type: () => ID}) _id : string) : Promise<ItemDTO> {
        return await this.itemService.deleteItem(_id);
    }

}