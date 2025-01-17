import { ProgramDtoApi, UserDtoApi } from 'src/app/sdk';

export interface TeamForm {
  longName: string;
  shortName: string;
  invitationEmails: UserDtoApi[];
  programs: ProgramDtoApi[];
}
