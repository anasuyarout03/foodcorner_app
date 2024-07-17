import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchTerm1 = '';

  constructor(activateRoute: ActivatedRoute, private router: Router){
      activateRoute.params.subscribe((params) => {
        if(params.searchTerm1)
          this.searchTerm1 = params.searchTerm1;
      });
  }

  ngOnInit(): void {

  }

    search(term: string){
      if(term)
        this.router.navigateByUrl('/search/'+term);
    }

}
