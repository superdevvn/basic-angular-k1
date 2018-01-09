import { Router, ActivatedRoute } from '@angular/router';
import { Indemtify } from '../shared/indemtiify.model';
import { ApiService } from './../../../api.service';
import { Injectable } from '@angular/core';


@Injectable()
export class IndemtifyService {
   constructor (private apiService: ApiService) {}

}