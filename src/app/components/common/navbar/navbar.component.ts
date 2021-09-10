import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    filterTerm: string[];
    text:any;
    constructor(private route: ActivatedRoute, private search : SearchService, private router: Router) {
     }

    ngOnInit(): void {
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
    submit(form){
        var searchText = form.searchText;
        this.search.getsearch(searchText).subscribe(data=>{
            this.filterTerm = data['search']
            console.log(this.filterTerm)
        })
    }
    clickToNav(data: any){
        console.log('data clicked!',data);
        // this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>{
        //     this.router.navigate(['/courses/'+data.url]);
        // })
        this.router.navigate(['/courses/'+data.url]);
        this.filterTerm = [];
    }
      
}