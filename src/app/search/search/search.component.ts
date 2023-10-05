import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchKeyword: string = ""
  
  constructor(private activatedRoute:ActivatedRoute,private searchService: SearchService) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.searchKeyword = params['keyword']
      this.searchMovie()
    })

  }

  searchMovie() {
    
  }



}
