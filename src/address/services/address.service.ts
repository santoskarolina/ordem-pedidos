import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Address } from "../entities/address.entity";
import { Repository } from "typeorm";
import { CreateAddressDto } from "../dto/addredd.dto";

@Injectable()
export class AddressService {

  constructor(
    @InjectRepository(Address)
    private repository: Repository<Address>
  ) {
  }

  create(address: CreateAddressDto){
      return this.repository.save(address)
  }
}
