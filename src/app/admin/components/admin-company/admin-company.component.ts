import { UsersRestService } from 'src/app/modules/profile/services/users-rest.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { CompaniesRestService } from 'src/app/modules/companies/service/companies-rest.service';
import { CompanyApi, UserApi } from 'src/app/sdk';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'alto-admin-company',
  templateUrl: './admin-company.component.html',
  styleUrls: ['./admin-company.component.scss']
})

export class AdminCompanyComponent implements OnInit {
  company!: CompanyApi;
  users: UserApi[] = [];
  id: string | undefined;
  companyForm: any;
  display = false;

  constructor(private readonly companiesRestService: CompaniesRestService, private readonly usersRestService:UsersRestService, private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.companiesRestService.getCompanyById(this.id)
    .pipe(
      tap((company) => this.company = company)
    ).pipe(
      tap((company) => { this.companyForm = this.formBuilder.group({
        domain: [this.company.domain],
        name: [this.company.name],
        isSlackActive: [this.company.isSlackActive],
      }); })
    )
    .subscribe();
    
    this.usersRestService.getUsers({companyId: this.id})
    .pipe(
      tap((users) => this.users = users)
    )
    .subscribe();
  }

  async submit() {
    // update the user with the userFrom value using the userRestService
    this.companiesRestService.patchCompany(this.company.id, this.companyForm.value).subscribe();
    
    // refresh after the API has time to implement the changes
    // first sleep 1 second
    await new Promise(f => setTimeout(f, 1000));
    this.ngOnInit();
    
  }
}