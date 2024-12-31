import { EntityDTO } from "@/types/entity.dto";

export interface UserDTO extends EntityDTO {
  email: string;
  password: string;
  userProfile: UserProfileDTO;
}

export interface UserProfileDTO extends EntityDTO {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  address: AddressDTO;
}

export interface AddressDTO extends EntityDTO {
  houseNameNumber: string;
  streetAddress: string;
  townOrCity: string;
  county: string;
  postalCode: string;
  country: string;
}
