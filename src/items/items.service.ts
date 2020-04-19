import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemDTO } from './dto/item.dto';
import { inputItemDTO } from './dto/inputItem.dto';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {

    constructor(@InjectModel('Item') private itemModel: Model<Item>) {}

    async createItem(createItemDTO : inputItemDTO) : Promise<ItemDTO> {
        const item = new this.itemModel(createItemDTO);
        return await item.save();
    }

    async getItems() : Promise<ItemDTO[]> {
        return await this.itemModel.find().lean().exec();
    }

    async getItem(_id : string) : Promise<ItemDTO> {
        return await this.itemModel.findOne({_id}).lean().exec();
    }

    async updateItem(_id : string, item : inputItemDTO) : Promise<ItemDTO> {
        return await this.itemModel.findOneAndUpdate({_id}, item, {new: true}).lean().exec();
    }

    async deleteItem(_id : string) : Promise<ItemDTO> {
        return await this.itemModel.findOneAndRemove({_id}).lean().exec();
    }

}